import { useState, useEffect } from 'react';
import TabletViewer from '@/components/TabletViewer';
import { useToast } from '@/hooks/use-toast';

export default function TabletListing() {
  const [refreshKey, setRefreshKey] = useState(0);
  const { toast } = useToast();

  // Expose refresh function to global scope so it can be called when tablets are added
  useEffect(() => {
    // @ts-ignore
    window.refreshTabletListing = () => setRefreshKey(prev => prev + 1);
    
    return () => {
      // @ts-ignore
      delete window.refreshTabletListing;
    };
  }, []);

  return (
    <div>
      <TabletViewer refreshKey={refreshKey} />
    </div>
  );
}
