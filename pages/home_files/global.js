var set_locale_to=function(b){b&&($.i18n().locale=b)};
jQuery(function(){var b=$("#root_URL").val();$.i18n().load({en:b+"/js/dashboard/i18n/en.json",vi:b+"/js/dashboard/i18n/vi.json"}).done(function(){set_locale_to(url("?lang"));History.Adapter.bind(window,"statechange",function(){set_locale_to(url("?lang"))});$(".switch-locale").on("click",function(a){a.preventDefault();a=window.location.search;""!=a?a.match(/&lang=.*/gm)?(a=a.replace(/&lang=.*/gm,""),History.pushState(null,null,a+"\x26lang\x3d"+$(this).data("lang"))):a.match(/\?lang=.*/gm)?(a=a.replace(/\?lang=.*/gm,
""),History.pushState(null,null,a+"?lang\x3d"+$(this).data("lang"))):History.pushState(null,null,a+"\x26lang\x3d"+$(this).data("lang")):History.pushState(null,null,a+"?lang\x3d"+$(this).data("lang"));$(".wrapper").i18n()});$(".wrapper").i18n()})});