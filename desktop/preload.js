const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // Example API methods (can be extended later)
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  
  // Platform detection
  getPlatform: () => process.platform,
  
  // Future API methods can be added here
  // Example: openExternalLink: (url) => ipcRenderer.invoke('open-external-link', url)
});

// Prevent the renderer process from accessing Node.js APIs
window.addEventListener('DOMContentLoaded', () => {
  // Any DOM manipulation needed at startup can go here
  console.log('CageSide Companion Desktop App Loaded');
}); 