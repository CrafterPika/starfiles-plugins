// Load META
var localstorplugins = localStorage.getItem('plugins');
var pluginmeta = JSON.parse(localstorplugins);

async function rmPluginID(index_name) {
    var pluginIndex = pluginmeta.indexOf(index_name);
    pluginmeta.splice(pluginIndex, 1);
    await localStorage.removeItem("plugins");
    await localStorage.setItem('plugins', JSON.stringify(pluginmeta, 2));
    alert('Plugin should be uninstalled')
    location.reload()
}