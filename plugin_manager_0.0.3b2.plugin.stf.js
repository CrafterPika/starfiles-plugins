// Metadata
const meta = {
    id: 'ml.crafterpika.pluginmanager69', // ID's should be a unique string
    name: 'PluginManager',
    author: 'CrafterPika',
    version: '0.0.3b1',
    link: 'https://github.com/CrafterPika/starfiles-plugins',
    compatibility:{
        website: true
    }
}
// Declare Plugin
window['start_' + meta.id] = function(){
    if (window.location.href == "https://starfiles.co/settings" || window.location.href == "https://starfiles.ml/settings") {
        var htmltext = `<button class="btn btn-small" id="pluginSettings">Plugin Settings</button>
        <br>
        <br>
        <div id="pluginManagerSettings" style="display:none;">
            <button class="btn btn-small" id="removeAllPlugins">Remove All Plugins</button>
        </div>
        <br>
        <br>
        <br>`;
        var x = document.getElementsByClassName('pagecard object'); 
        x[0].innerHTML = htmltext + x[0].innerHTML;

        // Settings Page
        document.getElementById("pluginSettings").addEventListener("click", function(){
            var x = document.getElementById("pluginManagerSettings");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        });

        // RM All Plugins
        document.getElementById("removeAllPlugins").addEventListener("click", function(){
            if (confirm('Are you sure to continue, this will disable all plugins you installed')) { 
                // DO IT!
                localStorage.removeItem("plugins");
                alert("Removed all Plugins")
            } else {
                alert('cancelled action')
            }
        });
    } else {
        // Nothing
    }
}
// Run Plugin
init_plugin(meta);
