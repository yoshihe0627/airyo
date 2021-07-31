var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_20201013_1 = new ol.format.GeoJSON();
var features_20201013_1 = format_20201013_1.readFeatures(json_20201013_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20201013_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20201013_1.addFeatures(features_20201013_1);
var lyr_20201013_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20201013_1, 
                style: style_20201013_1,
                interactive: true,
                title: '<img src="styles/legend/20201013_1.png" /> 20201013シカ情報マップメッシュロードキル'
            });
var format_20201013_2 = new ol.format.GeoJSON();
var features_20201013_2 = format_20201013_2.readFeatures(json_20201013_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20201013_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20201013_2.addFeatures(features_20201013_2);
var lyr_20201013_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20201013_2, 
                style: style_20201013_2,
                interactive: true,
                title: '<img src="styles/legend/20201013_2.png" /> 20201013シカ情報マップメッシュシカ'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_20201013_1.setVisible(true);lyr_20201013_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_20201013_1,lyr_20201013_2];
lyr_20201013_1.set('fieldAliases', {'Date': 'Date', 'Year': 'Year', 'Month': 'Month', 'Hour': 'Hour', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Sp': 'Sp', 'Male': 'Male', 'Female': 'Female', 'Unknown': 'Unknown', 'DeadLive': 'DeadLive', 'Mesh': 'Mesh', });
lyr_20201013_2.set('fieldAliases', {'Date': 'Date', 'Year': 'Year', 'Month': 'Month', 'Hour': 'Hour', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Sp': 'Sp', 'Male': 'Male', 'Female': 'Female', 'Unknown': 'Unknown', 'DeadLive': 'DeadLive', 'Mesh': 'Mesh', });
lyr_20201013_1.set('fieldImages', {'Date': 'TextEdit', 'Year': 'Range', 'Month': 'Range', 'Hour': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Sp': 'TextEdit', 'Male': 'Range', 'Female': 'Range', 'Unknown': 'Range', 'DeadLive': 'TextEdit', 'Mesh': 'TextEdit', });
lyr_20201013_2.set('fieldImages', {'Date': 'TextEdit', 'Year': 'Range', 'Month': 'Range', 'Hour': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Sp': 'TextEdit', 'Male': 'Range', 'Female': 'Range', 'Unknown': 'Range', 'DeadLive': 'TextEdit', 'Mesh': 'TextEdit', });
lyr_20201013_1.set('fieldLabels', {'Date': 'no label', 'Year': 'no label', 'Month': 'no label', 'Hour': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Sp': 'no label', 'Male': 'no label', 'Female': 'no label', 'Unknown': 'no label', 'DeadLive': 'no label', 'Mesh': 'no label', });
lyr_20201013_2.set('fieldLabels', {'Date': 'no label', 'Year': 'no label', 'Month': 'no label', 'Hour': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Sp': 'no label', 'Male': 'no label', 'Female': 'no label', 'Unknown': 'no label', 'DeadLive': 'no label', 'Mesh': 'no label', });
lyr_20201013_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});