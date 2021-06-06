// Load META
var localstorplugins = localStorage.getItem('plugins');
var pluginmeta = JSON.parse(localstorplugins);

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

// Remove function
async function rmPluginID(index_name) {
    await pluginmeta.remove(index_name);
    await localStorage.removeItem("plugins");
    await localStorage.setItem('plugins', JSON.stringify(pluginmeta, 2));
    alert('Plugin should be uninstalled')
    location.reload()
}