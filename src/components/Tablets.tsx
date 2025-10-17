import { useState, FormEvent, ChangeEvent, useEffect, useCallback } from 'react';
import { Pill, Trash2, Edit3, Plus, X } from 'lucide-react';
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
const API_BASE = import.meta.env.VITE_API_BASE_URL || '';
const apiUrl = (path: string) => `${API_BASE}${path}`;

async function parseJsonSafely(response: Response) {
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    const text = await response.text();
    throw new Error(`Unexpected response (status ${response.status}). Expected JSON but got: ${text.slice(0, 120)}...`);
  }
  return response.json();
}
const tabletsClient = {
  // Get all tablets
  getTablets: async (): Promise<Tablet[]> => {
    try {
      const response = await fetch(apiUrl('/api/tablets'));
      if (!response.ok) {
        throw new Error(`Failed to fetch tablets: ${response.status} ${response.statusText}`);
      }
      const data = await parseJsonSafely(response);
      return data.tablets || data;
    } catch (error) {
      console.error('Error fetching tablets:', error);
      const message = error instanceof Error ? error.message : 'Unknown error fetching tablets';
      throw new Error(message);
    }
  },

  // Create a new tablet
  createTablet: async (tabletData: Omit<Tablet, 'id' | 'createdAt' | 'updatedAt'>): Promise<Tablet> => {
    try {
      const response = await fetch(apiUrl('/api/tablets'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tabletData),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Failed to create tablet: ${response.status} ${response.statusText}`);
      }
      
      const data = await parseJsonSafely(response);
      return data.tablet || data;
    } catch (error) {
      console.error('Error creating tablet:', error);
      const message = error instanceof Error ? error.message : 'Unknown error creating tablet';
      throw new Error(message);
    }
  },

  // Update an existing tablet
  updateTablet: async (id: string, tabletData: Partial<Omit<Tablet, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Tablet> => {
    try {
      const response = await fetch(apiUrl(`/api/tablets/${id}`), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tabletData),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Failed to update tablet: ${response.status} ${response.statusText}`);
      }
      
      const data = await parseJsonSafely(response);
      return data.tablet || data;
    } catch (error) {
      console.error('Error updating tablet:', error);
      const message = error instanceof Error ? error.message : 'Unknown error updating tablet';
      throw new Error(message);
    }
  },

  // Delete a tablet
  deleteTablet: async (id: string): Promise<void> => {
    try {
      const response = await fetch(apiUrl(`/api/tablets/${id}`), {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Failed to delete tablet: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error deleting tablet:', error);
      const message = error instanceof Error ? error.message : 'Unknown error deleting tablet';
      throw new Error(message);
    }
  }
};

// Use the API client functions
const { getTablets, createTablet, updateTablet, deleteTablet } = tabletsClient;

function TabletForm({
  onSubmit,
  onCancel,
  editingTablet = null
}: {
  onSubmit: (tablet: Tablet) => void;
  onCancel: () => void;
  editingTablet?: Tablet | null;
}) {
  const { toast } = useToast();

  const [formData, setFormData] = useState<Omit<Tablet, 'id' | 'createdAt' | 'updatedAt'>>({
    name: editingTablet?.name || '',
    genericName: editingTablet?.genericName || '',
    price: editingTablet?.price || 0,
    description: editingTablet?.description || ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (editingTablet) {
      setFormData({
        name: editingTablet.name,
        genericName: editingTablet.genericName,
        price: editingTablet.price,
        description: editingTablet.description || ''
      });
      setErrors({});
    }
  }, [editingTablet]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let newValue: string | number = value;
    
    // Special handling for price field
    if (name === 'price') {
      if (value === '') {
        newValue = 0; // Keep as 0 when empty for internal state
      } else {
        const parsedValue = parseFloat(value);
        newValue = isNaN(parsedValue) ? 0 : parsedValue;
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name || !formData.name.trim()) {
      newErrors.name = 'Medicine name is required';
    }
    
    if (!formData.genericName || !formData.genericName.trim()) {
      newErrors.genericName = 'Generic name is required';
    }
    
    // For price, we need to make sure it's greater than 0 when submitting
    if (formData.price <= 0) {
      newErrors.price = 'Price must be greater than 0';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted with data:', formData);
    
    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      let tablet: Tablet;

      if (editingTablet) {
        console.log('Updating tablet:', editingTablet.id);
        tablet = await updateTablet(editingTablet.id, formData);
        toast({
          title: "Success",
          description: "Tablet updated successfully!",
        });
      } else {
        console.log('Creating new tablet');
        tablet = await createTablet(formData);
        toast({
          title: "Success",
          description: "Tablet added successfully!",
        });
      }

      console.log('Operation successful, tablet:', tablet);

      if (!editingTablet) {
        setFormData({
          name: '',
          genericName: '',
          price: 0,
          description: ''
        });
      }

      onSubmit(tablet);
    } catch (error: unknown) {
      console.error('Tablet operation error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: (error instanceof Error ? error.message : `Failed to ${editingTablet ? 'update' : 'add'} tablet. Please try again.`),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-3 sm:p-4 md:p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 my-4">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-green-100 p-2 sm:p-3 rounded-lg sm:rounded-full">
              <Pill className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-600" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
              {editingTablet ? 'Edit Medicine' : 'Add New Medicine'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onCancel}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Medicine Name *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-base ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g., Paracetamol"
            />
            {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="genericName" className="block text-sm font-medium text-gray-700 mb-2">
              Generic Name *
            </label>
            <input
              id="genericName"
              type="text"
              name="genericName"
              value={formData.genericName}
              onChange={handleChange}
              className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-base ${
                errors.genericName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g., Acetaminophen"
            />
            {errors.genericName && <p className="mt-1.5 text-sm text-red-600">{errors.genericName}</p>}
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
              Price (₹) *
            </label>
            <input
              id="price"
              type="number"
              name="price"
              value={formData.price === 0 ? '' : formData.price}
              onChange={handleChange}
              step="0.01"
              min="0.01"
              inputMode="decimal"
              className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-base ${
                errors.price ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g., 10.99"
            />
            {errors.price && <p className="mt-1.5 text-sm text-red-600">{errors.price}</p>}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-base resize-none"
              placeholder="Brief description about the medicine..."
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="w-full sm:flex-1 bg-gray-200 text-gray-700 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-base"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:flex-1 bg-green-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-base"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {editingTablet ? 'Updating...' : 'Adding...'}
                </>
              ) : (
                editingTablet ? 'Update Tablet' : 'Add Tablet'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function TabletList({ onEdit, refreshTrigger }: { onEdit: (tablet: Tablet) => void; refreshTrigger: number }) {
  const [tablets, setTablets] = useState<Tablet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchTablets = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTablets();
      setTablets(data);
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
  }, [toast]);

  useEffect(() => {
    fetchTablets();
  }, [fetchTablets, refreshTrigger]);

  

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) {
      return;
    }

    try {
      await deleteTablet(id);
      setTablets(tablets.filter(tablet => tablet.id !== id));
      toast({
        title: "Success",
        description: `Tablet "${name}" deleted successfully!`,
      });
    } catch (error: unknown) {
      console.error('Failed to delete tablet:', error);
      const errorMessage = error instanceof Error ? error.message : "Failed to delete tablet. Please try again.";
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-12 text-center">
        <div className="bg-red-100 border-2 border-red-200 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <Pill className="h-8 w-8 text-red-600" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Error Loading Tablets</h3>
        <p className="text-sm sm:text-base text-gray-500 mb-4">{error}</p>
        <button 
          onClick={fetchTablets}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Mobile Card View */}
      <div className={`lg:hidden space-y-3 ${tablets.length === 0 ? 'hidden' : ''}`}>
        {tablets.map((tablet) => (
          <div key={tablet.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Pill className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-900 mb-1">{tablet.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{tablet.genericName}</p>
                {tablet.description && (
                  <p className="text-sm text-gray-500 mb-2 line-clamp-2">{tablet.description}</p>
                )}
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold text-green-600">₹{tablet.price.toFixed(2)}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEdit(tablet)}
                      className="p-2 text-indigo-600 hover:text-indigo-900 rounded-lg hover:bg-indigo-50 transition-colors active:scale-95"
                      aria-label="Edit"
                    >
                      <Edit3 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(tablet.id, tablet.name)}
                      className="p-2 text-red-600 hover:text-red-900 rounded-lg hover:bg-red-50 transition-colors active:scale-95"
                      aria-label="Delete"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show empty state for both mobile and desktop */}
      {tablets.length === 0 && (
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-12 text-center">
          <Pill className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">No tablets found</h3>
          <p className="text-sm sm:text-base text-gray-500">Add your first tablet using the button above</p>
        </div>
      )}

      {/* Desktop Table View */}
      <div className={`hidden lg:block bg-white rounded-xl shadow-md overflow-hidden ${tablets.length === 0 ? 'hidden' : ''}`}>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medicine
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Generic Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tablets.map((tablet) => (
                <tr key={tablet.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Pill className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{tablet.name}</div>
                        {tablet.description && (
                          <div className="text-sm text-gray-500 max-w-xs truncate">{tablet.description}</div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{tablet.genericName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    ₹{tablet.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end items-center gap-2">
                      <button
                        onClick={() => onEdit(tablet)}
                        className="text-indigo-600 hover:text-indigo-900 p-2 rounded-lg hover:bg-indigo-50 transition-colors"
                        aria-label="Edit"
                      >
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(tablet.id, tablet.name)}
                        className="text-red-600 hover:text-red-900 p-2 rounded-lg hover:bg-red-50 transition-colors"
                        aria-label="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default function TabletsManager() {
  const [editingTablet, setEditingTablet] = useState<Tablet | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleFormSubmit = async (tablet: Tablet) => {
    // Force refresh the tablet list
    setRefreshKey(prev => prev + 1);
    setEditingTablet(null);
    setShowForm(false);
    
    // Call global refresh functions if they exist
    // @ts-expect-error Optional global callback if present at runtime
    if (typeof window.refreshTablets === 'function') {
      // @ts-expect-error Optional global callback if present at runtime
      window.refreshTablets();
    }
    
    // @ts-expect-error Optional global callback if present at runtime
    if (typeof window.refreshTabletListing === 'function') {
      // @ts-expect-error Optional global callback if present at runtime
      window.refreshTabletListing();
    }
    
    // Small delay to ensure state updates
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleCancel = () => {
    setEditingTablet(null);
    setShowForm(false);
  };

  const handleEdit = (tablet: Tablet) => {
    setEditingTablet(tablet);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddNew = () => {
    setEditingTablet(null);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      {showForm ? (
        <div className="w-full">
          <TabletForm 
            onSubmit={handleFormSubmit} 
            onCancel={handleCancel} 
            editingTablet={editingTablet} 
          />
        </div>
      ) : (
        <div className="p-3 sm:p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1">
                  Tablet Management
                </h1>
                <p className="text-sm sm:text-base text-gray-600">
                  Manage your medicine inventory
                </p>
              </div>
              <button
                onClick={handleAddNew}
                className="w-full sm:w-auto bg-green-600 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
              >
                <Plus className="w-5 h-5" />
                <span>Add New Tablet</span>
              </button>
            </div>

            <TabletList onEdit={handleEdit} refreshTrigger={refreshKey} />
          </div>
        </div>
      )}
    </div>
  );
}