

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


if(typeof Windows !== 'undefined'){
 
 
 
 
    

    
    setTimeout(function(){ $('#romeControl').addClass('fadeIn')}, 4000)
    
}


var GenerateList = function(a){             };
var sentStateData = function(state, a){         };