

if(window.Windows && window.Windows.ApplicationModel){
    
        var appServiceCatalog = Windows.ApplicationModel.AppService.AppServiceCatalog;

$('#romeControl').click(function(){
    
    appServiceCatalog.findAppServiceProvidersAsync(appServiceName).done( function(returnObj){
        
        var generateDevicelist = [];
        generateDevicelist.push(returnObj.dList)
    } );
    
    GenerateList(generateDevicelist)
})


var appServiceConnection = new Windows.ApplicationModel.AppService.AppServiceConnection();
     appServiceConnection.openAsync().done(function(a){
         sendStateData(state, a)
     } );
    
    
}





var GenerateList = function(a){             };
var sentStateData = function(state, a){         };