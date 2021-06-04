// Metadata
const meta = {
    id: 'ml.crafterpika.pluginmanager69', // ID's should be a unique string
    name: 'PluginManager',
    author: 'CrafterPika',
    version: '0.0.1',
    link: 'https://github.com/CrafterPika/starfiles-plugins',
    compatibility:{
        website: true
    }
}
// Declare Plugin
window['start_' + meta.id] = function(){
    var htmltext = '<button class="btn btn-small" id="removePlugins">Remove All Plugins</button><br><br>';
    var x = document.getElementsByClassName('pagecard object'); 
    x[0].innerHTML = htmltext + x[0].innerHTML;
    
    document.getElementById("removePlugins").addEventListener("click", function(){
        if (confirm('Are you sure to continue, this will disable all plugins you installed')) { 
            // DO IT!
            localStorage.removeItem("plugins");
            alert("Removed all Plugins")
        } else {
            alert('cancelled action')
        }
    });
}
// Run Plugin
init_plugin(meta);
