import { useState } from "react";
import TabletsManager from "@/components/Tablets";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { type Tablet } from "@/integrations/neon/apiClient/tabletsClient";

const TabletsPage = () => {
  const [keyInput, setKeyInput] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const ADMIN_KEY = "admin123";

  const handleAdminAccess = () => {
    if (keyInput === ADMIN_KEY) {
      setIsAuthenticated(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {isAuthenticated ? (
          <TabletsManager />
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <div className="flex justify-center mb-6">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-center mb-6">Admin Access Required</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="admin-key" className="block text-sm font-medium text-gray-700 mb-1">
                    Enter Admin Key
                  </label>
                  <input
                    id="admin-key"
                    type="password"
                    value={keyInput}
                    onChange={(e) => setKeyInput(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter admin key"
                  />
                </div>
                <Button 
                  onClick={handleAdminAccess}
                  className="w-full"
                >
                  Access Admin Panel
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabletsPage;