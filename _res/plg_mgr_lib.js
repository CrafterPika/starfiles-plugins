// Load META
var localstorplugins = localStorage.getItem('plugins');
var pluginmeta = JSON.parse(localstorplugins);

// Inject Jquery
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js';
document.head.appendChild(script);

// Remove function
async function rmPluginID(plugin_name) {
    $.each(pluginmeta, function(i){
        if(pluginmeta[i].plugin_name === plugin_name) {
            pluginmeta.splice(i,1);
            return false;
        }
    });
    console.log(pluginmeta)
    await localStorage.removeItem("plugins");
    await localStorage.setItem('plugins', JSON.stringify(pluginmeta, 2));
    alert('Plugin should be uninstalled')
    location.reload()
}