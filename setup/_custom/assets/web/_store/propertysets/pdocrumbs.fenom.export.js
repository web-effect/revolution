[{"name":"direction","desc":"pdotools_prop_direction","xtype":"list","options":[{"value":"ltr","text":"Left To Right (ltr)","name":"Left To Right (ltr)"},{"value":"rtl","text":"Right To Left (rtl)","name":"Right To Left (rtl)"}],"value":"ltr","lexicon":"pdotools:properties","overridden":false,"desc_trans":"Направление навигации: слева направо (ltr) или справа налево (rtl), например для Арабского языка.","area":"","area_trans":"","menu":null},{"name":"exclude","desc":"pdotools_prop_exclude","xtype":"textfield","options":[],"value":"","lexicon":"pdotools:properties","overridden":false,"desc_trans":"Список id ресурсов, которые нужно исключить из выборки.","area":"","area_trans":"","menu":null},{"name":"fastMode","desc":"pdotools_prop_fastMode","xtype":"combo-boolean","options":[],"value":false,"lexicon":"pdotools:properties","overridden":false,"desc_trans":"Быстрый режим обработки чанков. Все необработанные теги (условия, сниппеты и т.п.) будут вырезаны.","area":"","area_trans":"","menu":null},{"name":"from","desc":"pdotools_prop_from","xtype":"numberfield","options":[],"value":0,"lexicon":"pdotools:properties","overridden":false,"desc_trans":"Id ресурса, от которого строить хлебные крошки. Обычно это корень сайта, то есть \"0\".","area":"","area_trans":"","menu":null},{"name":"hideContainers","desc":"pdotools_prop_hideContainers","xtype":"combo-boolean","options":[],"value":false,"lexicon":"pdotools:properties","overridden":false,"desc_trans":"Отключает вывод контейнеров, то есть, ресурсов с isfolder = 1.","area":"","area_trans":"","menu":null},{"name":"hideSingle","desc":"pdotools_prop_hideSingle","xtype":"combo-boolean","options":[],"value":false,"lexicon":"pdotools:properties","overridden":false,"desc_trans":"Не выводить результат, если он один единственный.","area":"","area_trans":"","menu":null},{"name":"includeTVs","desc":"pdotools_prop_includeTVs","xtype":"textfield","options":[],"value":"","lexicon":"pdotools:properties","overridden":false,"desc_trans":"Список ТВ параметров для выборки, через запятую. Например: \"action,time\" дадут плейсхолдеры [[+action]] и [[+time]].","area":"","area_trans":"","menu":null},{"name":"limit","desc":"pdotools_prop_limit","xtype":"numberfield","options":[],"value":10,"lexicon":"pdotools:properties","overridden":false,"desc_trans":"Ограничение количества результатов выборки. Можно использовать \"0\".","area":"","area_trans":"","menu":null},{"name":"outputSeparator","desc":"pdotools_prop_outputSeparator","xtype":"textfield","options":[],"value":"\n","lexicon":"pdotools:properties","overridden":false,"desc_trans":"Необязательная строка для разделения результатов работы.","area":"","area_trans":"","menu":null},{"name":"prepareTVs","desc":"pdotools_prop_prepareTVs","xtype":"textfield","options":[],"value":"1","lexicon":"pdotools:properties","overridden":false,"desc_trans":"Список ТВ параметров, которые нужно подготовить перед выводом. По умолчанию, установлено в \"1\", что означает подготовку всех ТВ, указанных в \"&includeTVs=``\"","area":"","area_trans":"","menu":null},{"name":"processTVs","desc":"pdotools_prop_processTVs","xtype":"textfield","options":[],"value":"","lexicon":"pdotools:properties","overridden":false,"desc_trans":"Список ТВ параметров, которые нужно обработать перед выводом. Если установить в \"1\" - будут обработаны все ТВ, указанные в \"&includeTVs=``\". По умолчанию параметр пуст.","area":"","area_trans":"","menu":null},{"name":"scheme","desc":"pdotools_prop_scheme","xtype":"list","options":[{"value":"","text":"System default","name":"System default"},{"value":-1,"text":"-1 (relative to site_url)","name":"-1 (relative to site_url)"},{"value":"full","text":"full (absolute, prepended with site_url)","name":"full (absolute, prepended with site_url)"},{"value":"abs","text":"abs (absolute, prepended with base_url)","name":"abs (absolute, prepended with base_url)"},{"value":"http","text":"http (absolute, forced to http scheme)","name":"http (absolute, forced to http scheme)"},{"value":"https","text":"https (absolute, forced to https scheme)","name":"https (absolute, forced to https scheme)"}],"value":"","lexicon":"pdotools:properties","overridden":false,"desc_trans":"Схема формирования ссылок: \"uri\" для подстановки поля uri документа (очень быстро) или параметр для modX::makeUrl().","area":"","area_trans":"","menu":null},{"name":"showAtHome","desc":"pdotools_prop_showAtHome","xtype":"combo-boolean","options":[],"value":true,"lexicon":"pdotools:properties","overridden":false,"desc_trans":"Показывать хлебные крошки на главной странице сайта.","area":"","area_trans":"","menu":null},{"name":"showCurrent","desc":"pdotools_prop_showCurrent","xtype":"combo-boolean","options":[],"value":true,"lexicon":"pdotools:properties","overridden":false,"desc_trans":"Выводить текущий документ в навигации.","area":"","area_trans":"","menu":null},{"name":"showDeleted","desc":"pdotools_prop_showDeleted","xtype":"combo-boolean","options":[],"value":false,"lexicon":"pdotools:properties","overridden":false,"desc_trans":"Показывать удалённые ресурсы.","area":"","area_trans":"","menu":null},{"name":"showHidden","desc":"pdotools_prop_showHidden","xtype":"combo-boolean","options":[],"value":true,"lexicon":"pdotools:properties","overridden":false,"desc_trans":"Показывать ресурсы, скрытые в меню.","area":"","area_trans":"","menu":null},{"name":"showHome","desc":"pdotools_prop_showHome","xtype":"combo-boolean","options":[],"value":false,"lexicon":"pdotools:properties","overridden":false,"desc_trans":"Выводить ссылку на главную в начале навигации.","area":"","area_trans":"","menu":null},{"name":"showLog","desc":"pdotools_prop_showLog","xtype":"combo-boolean","options":[],"value":false,"lexicon":"pdotools:properties","overridden":false,"desc_trans":"Показывать дополнительную информацию о работе сниппета. Только для авторизованных в контекте \"mgr\".","area":"","area_trans":"","menu":null},{"name":"showUnpublished","desc":"pdotools_prop_showUnpublished","xtype":"combo-boolean","options":[],"value":false,"lexicon":"pdotools:properties","overridden":false,"desc_trans":"Показывать неопубликованные ресурсы.","area":"","area_trans":"","menu":null},{"name":"to","desc":"pdotools_prop_to","xtype":"numberfield","options":[],"value":"","lexicon":"pdotools:properties","overridden":false,"desc_trans":"Id ресурса для которого строятся хлебные крошки. По умолчанию это id текущей страницы.","area":"","area_trans":"","menu":null},{"name":"toPlaceholder","desc":"pdotools_prop_toPlaceholder","xtype":"textfield","options":[],"value":"","lexicon":"pdotools:properties","overridden":false,"desc_trans":"Если не пусто, сниппет сохранит все данные в плейсхолдер с этим именем, вместо вывода не экран.","area":"","area_trans":"","menu":null},{"name":"tpl","desc":"pdotools_prop_tpl","xtype":"textfield","options":[],"value":"@INLINE <li><a href=\"<$$link$>\"><$$menutitle$></a></li>","lexicon":"pdotools:properties","overridden":false,"desc_trans":"Имя чанка для оформления ресурса. Если не указан, то содержимое полей ресурса будет распечатано на экран.","area":"","area_trans":"","menu":null},{"name":"tplCurrent","desc":"pdotools_prop_tplCurrent","xtype":"textfield","options":[],"value":"@INLINE <li class=\"active\"><$$menutitle$></li>","lexicon":"pdotools:properties","overridden":false,"desc_trans":"Чанк оформления текущего документа в навигации.","area":"","area_trans":"","menu":null},{"name":"tplHome","desc":"pdotools_prop_tplHome","xtype":"textfield","options":[],"value":"","lexicon":"pdotools:properties","overridden":false,"desc_trans":"Чанк оформления ссылки на главную страницу.","area":"","area_trans":"","menu":null},{"name":"tplMax","desc":"pdotools_prop_tplMax","xtype":"textfield","options":[],"value":"@INLINE <li class=\"disabled\">&nbsp;...&nbsp;</li>","lexicon":"pdotools:properties","overridden":false,"desc_trans":"Чанк, который добавляется в начало результатов, если их больше чем \"&limit\".","area":"","area_trans":"","menu":null},{"name":"tplWrapper","desc":"pdotools_prop_tplWrapper","xtype":"textfield","options":[],"value":"@INLINE <ul class=\"breadcrumb\"><$$output$></ul>","lexicon":"pdotools:properties","overridden":false,"desc_trans":"Чанк-обёртка, для заворачивания всех результатов. Понимает один плейсхолдер: [[+output]]. Не работает вместе с параметром \"toSeparatePlaceholders\".","area":"","area_trans":"","menu":null},{"name":"tvPrefix","desc":"pdotools_prop_tvPrefix","xtype":"textfield","options":[],"value":"tv.","lexicon":"pdotools:properties","overridden":false,"desc_trans":"Префикс для ТВ параметров.","area":"","area_trans":"","menu":null},{"name":"useWeblinkUrl","desc":"pdotools_prop_useWeblinkUrl","xtype":"combo-boolean","options":[],"value":true,"lexicon":"pdotools:properties","overridden":false,"desc_trans":"Генерировать ссылку с учетом класса ресурса.","area":"","area_trans":"","menu":null},{"name":"where","desc":"pdotools_prop_where","xtype":"textfield","options":[],"value":"","lexicon":"pdotools:properties","overridden":false,"desc_trans":"Массив дополнительных параметров выборки, закодированный в JSON.","area":"","area_trans":"","menu":null},{"name":"wrapIfEmpty","desc":"pdotools_prop_wrapIfEmpty","xtype":"combo-boolean","options":[],"value":false,"lexicon":"pdotools:properties","overridden":false,"desc_trans":"Включает вывод чанка-обертки (tplWrapper) даже если результатов нет.","area":"","area_trans":"","menu":null}]