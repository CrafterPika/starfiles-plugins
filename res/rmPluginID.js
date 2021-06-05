var localstorplugins = localStorage.getItem('plugins');
var pluginmeta = JSON.parse(localstorplugins);
async function rmPluginID(id) {
    pluginmeta.splice(id, 1);
    localStorage.removeItem("plugins");
    localStorage.setItem('plugins', pluginmeta);
    alert('Plugin should be uninstalled')
}