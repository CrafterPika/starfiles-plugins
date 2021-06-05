// Metadata
const meta = {
    id: 'ml.crafterpika.pluginmanager69', // ID's should be a unique string
    name: 'PluginManager',
    author: 'CrafterPika',
    version: '0.0.3b4',
    link: 'https://github.com/CrafterPika/starfiles-plugins',
    compatibility:{
        website: true
    }
}
// Declare Plugin
window['start_' + meta.id] = function(){
    if (window.location.href == "https://starfiles.co/settings" || window.location.href == "https://starfiles.ml/settings") {
        // get Plugins Info
        var localstorplugins = localStorage.getItem('plugins');
        var pluginmeta = JSON.parse(localstorplugins);

        var htmltext = `<button class="btn btn-small" id="pluginSettings">Plugin Manager Settings</button>
        <br>
        <br>
        <div id="pluginManagerSettings" style="display:none;">
            <p>Plugin Options:</p>
            <button class="btn btn-small" id="removeAllPlugins">Remove All Plugins</button>
            <br>
            <br>
            <p>Installed Plugins</p>
            <div id="installedPluginList">
            </div>

            <!-- Space Unde this text -->
            <br>
            <br>
        </div>`;
        var x = document.getElementsByClassName('pagecard object'); 
        x[0].innerHTML = htmltext + x[0].innerHTML;

        pluginmeta.forEach(plugin => {
            var gh_url = "https://github.com/" + plugin.repo;
            var plugin_nm = plugin.plugin_name;
            var plugin_ver = plugin.version;

            var x = document.getElementById('installedPluginList')
            var htmltext =  `<p>Source: <a href="${gh_url}" target="_blank">Github Repo</a> | Name: ${plugin_nm} | Version: ${plugin_ver}`
            x.innerHTML = htmltext + x.innerHTML;
        })

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
