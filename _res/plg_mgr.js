// Load META
var localstorplugins = localStorage.getItem('plugins');
var pluginmeta = JSON.parse(localstorplugins);

// rm plugin
async function rmPluginID(json_id) {
    var newJSONMeta = await pluginmeta.splice(json_id, json_id);
    console.log(newJSONMeta)
    await localStorage.removeItem("plugins");
    await localStorage.setItem('plugins', JSON.stringify(newJSONMeta, 2));
    alert('Plugin should be uninstalled')
    location.reload()
}