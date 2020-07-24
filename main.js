head.js('lib/rete.min.js', 'lib/vue.min.js', 'lib/vue-render-plugin.min.js', 'lib/connection-plugin.min.js', 'lib/minimap-plugin.min.js', 'lib/lodash.min.js', 'lib/alight.min.js', 'lib/context-menu-plugin.min.js', 
    function() {
head.js('controls.js', 'components.js', function() {

(async () => {
    var container = document.querySelector('#rete');
    var components = [new LocationComponent(), new ChoiceComponent(), new StartComponent()];
    
    var editor = new Rete.NodeEditor('demo@0.1.0', container);
    editor.use(ConnectionPlugin.default);
    editor.use(VueRenderPlugin.default); 
    editor.use(ContextMenuPlugin.default);
    editor.use(MinimapPlugin.default);   

    var engine = new Rete.Engine('demo@0.1.0');
    
    components.map(c => {
        editor.register(c);
        engine.register(c);
    });

    editor.on('process nodecreated noderemoved connectioncreated connectionremoved', async () => {
      console.log('process');
        await engine.abort();
        await engine.process(editor.toJSON());
    });

    editor.view.resize();
    //AreaPlugin.zoomAt(editor);
    editor.trigger('process');

})();

});
});