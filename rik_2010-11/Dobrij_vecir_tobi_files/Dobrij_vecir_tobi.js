// Created by iWeb 3.0.2 local-build-20101229

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id6" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="300" height="16"><param name="src" value="Media/%D0%94%D0%BE%D0%B1%D1%80%D0%B8%D0%B8%CC%86%20%D0%B2%D0%B5%D1%87%D1%96%D1%80%20%D1%82%D0%BE%D0%B1%D1%96.aif" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id6" type="video/quicktime" width="300" height="16"><param name="src" value="Media/%D0%94%D0%BE%D0%B1%D1%80%D0%B8%D0%B8%CC%86%20%D0%B2%D0%B5%D1%87%D1%96%D1%80%20%D1%82%D0%BE%D0%B1%D1%96.aif"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id6" type="video/quicktime" width="300" height="16" data="Media/%D0%94%D0%BE%D0%B1%D1%80%D0%B8%D0%B8%CC%86%20%D0%B2%D0%B5%D1%87%D1%96%D1%80%20%D1%82%D0%BE%D0%B1%D1%96.aif"><param name="src" value="Media/%D0%94%D0%BE%D0%B1%D1%80%D0%B8%D0%B8%CC%86%20%D0%B2%D0%B5%D1%87%D1%96%D1%80%20%D1%82%D0%BE%D0%B1%D1%96.aif"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Dobrij_vecir_tobi_files/Dobrij_vecir_tobiMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
