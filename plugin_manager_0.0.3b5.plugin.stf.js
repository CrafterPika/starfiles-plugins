// Metadata
const meta = {
    id: 'ml.crafterpika.pluginmanager69', // ID's should be a unique string
    name: 'PluginManager',
    author: 'CrafterPika',
    version: '0.0.3b5',
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

        //var script = `<script>
            // var localstorplugins = localStorage.getItem('plugins');
            // var pluginmeta = JSON.parse(localstorplugins);
            // async function rmPluginID(id) {
                // pluginmeta.splice(id, 1);
                // localStorage.removeItem("plugins");
                // localStorage.setItem('plugins', pluginmeta);
                // alert('Plugin should be uninstalled')
            // }
        //</script>`;
        //var header = document.getElementsByTagName('head')[0];
        // header.innerHTML = script + header.innerHTML;

        var htmltext = `<button class="btn btn-small" id="pluginSettings">Plugin Manager Settings</button>
        <br>
        <br>
        <div id="pluginManagerSettings" style="display:none;">
            <script src="https://raw.githubusercontent.com/CrafterPika/starfiles-plugins/main/res/rmPluginID.js"></script>
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

        pluginmeta.forEach(function(currentValue, index) {
            var gh_url = "https://github.com/" + currentValue.repo;
            var plugin_nm = currentValue.plugin_name;
            var plugin_ver = currentValue.version;
            var index_nm = index;

            let s4 = () => {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }

            var id = "rmPlugin" + s4();

            var x = document.getElementById('installedPluginList')
            var htmltext =  `<p>Source: <a href="${gh_url}" target="_blank">Github Repo</a> | Name: ${plugin_nm} | Version: ${plugin_ver} | <button class="btn btn-small" id="${id}">Uninstall</button>`
            x.innerHTML = htmltext + x.innerHTML;

            //rmpluginLOL
            document.getElementById(id).addEventListener("click", function(){
                // do it
                var localstorplugins = localStorage.getItem('plugins');
                var pluginmeta = JSON.parse(localstorplugins);
                async function rmPluginID(json_id) {
                    var newJSONMeta = await pluginmeta.splice(json_id, json_id);
                    console.log(newJSONMeta)
                    await localStorage.removeItem("plugins");
                    await localStorage.setItem('plugins', JSON.stringify(newJSONMeta, 2));
                    alert('Plugin should be uninstalled')
                }rmPluginID(index_nm);
            });
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
