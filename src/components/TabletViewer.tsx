import { useState, useEffect } from 'react';
import { Pill, Package, IndianRupee, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Define the Tablet type
type Tablet = {
  id: string;
  name: string;
  genericName: string;
  price: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
};

// Create an API client for tablets
const tabletsClient = {
  // Get all tablets
  getTablets: async (): Promise<Tablet[]> => {
    try {
      const response = await fetch('/api/tablets');
      if (!response.ok) {
        throw new Error(`Failed to fetch tablets: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data.tablets || data;
    } catch (error) {
      console.error('Error fetching tablets:', error);
      throw error;
    }
  }
};

const { getTablets } = tabletsClient;

interface TabletViewerProps {
  tablets?: Tablet[]; // ✅ Optional tablets prop
  refreshKey?: number; // ✅ Refresh key to trigger data reload
}

const TabletViewer = ({ tablets, refreshKey = 0 }: TabletViewerProps) => {
  const [localTablets, setLocalTablets] = useState<Tablet[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Fetch tablets if not provided via props or if refreshKey changes
  useEffect(() => {
    const fetchTablets = async () => {
      // If tablets are provided via props, use them
      if (tablets && tablets.length > 0) {
        setLocalTablets(tablets);
        return;
      }
      
      // Otherwise fetch tablets from API
      setLoading(true);
      setError(null);
      try {
        const data = await getTablets();
        setLocalTablets(data);
        setError(null);
      } catch (error) {
        console.error('Failed to fetch tablets:', error);
        const errorMessage = error instanceof Error ? error.message : 'Failed to load tablets. Please try again.';
        setError(errorMessage);
        toast({
          variant: "destructive",
          title: "Error",
          description: errorMessage,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTablets();
  }, [tablets, refreshKey]);

  const displayTablets = tablets || localTablets;

  if (loading) {
    return (
      <div className="bg-background flex items-center justify-center">
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-green-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-background flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md w-full">
          <div className="bg-red-100 border-2 border-red-200 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Pill className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Tablets</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500 mb-6">Please check your database connection and try again.</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!displayTablets || displayTablets.length === 0) {
    return (
      <div className="bg-background flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md w-full">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Pill className="h-8 w-8 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No Tablets Available</h2>
          <p className="text-gray-600 mb-6">There are currently no tablets in the system.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background py-4">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Medicine Tablets</h1>
          <p className="text-gray-600">Browse our collection of medicine tablets</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTablets.map((tablet) => (
            <div key={tablet.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <Pill className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{tablet.name}</h3>
                      <p className="text-sm text-gray-500">{tablet.genericName}</p>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                    ₹{tablet.price.toFixed(2)}
                  </div>
                </div>
                
                {tablet.description && (
                  <div className="mb-4">
                    <div className="flex items-start">
                      <FileText className="h-4 w-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{tablet.description}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
                  <Package className="h-4 w-4 mr-2" />
                  <span>ID: {tablet.id.substring(0, 8)}...</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <IndianRupee className="h-4 w-4 mr-2" />
                  <span>Price: ₹{tablet.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabletViewer;