<$$_modx->lexicon->load('cultureKey'|config~':core:default')$>
<!doctype html>
<html lang='<$'cultureKey'|config$>'>
	<head>
		<$include '000-HEAD'$>
		<$block 'seo'$>
			<title><$(''|resource:'longtitle')?:((''|resource:'pagetitle')~' | '~('site_name'|option))$></title>
			<meta name="description" content="<$''|resource:'description'$>">
		<$/block$>
	</head>
	<body>
		<$include '100-BODY_BEFORE'$>
		<div class='header section'>
			<div class='header__column section__column'><$include '101-HEADER'$></div>
		</div>
		<$block 'sections'$>
			<div class="section section__main">
				<div class='main__column section__column'>
					<$block 'main'$>
						<$block 'crumbs'$><$include '200-BREADCRUMBS'$><$/block$>
						<div class='main__content _middle'>
							<$block 'pagetitle'$><div class="pagetitle title"><h1><$''|resource:'pagetitle'$></h1></div><$/block$>
							<$block 'content'$><div class="content tinymce"><$''|resource:'content'$></div><$/block$>
						</div>
					<$/block$>
				</div>
			</div>
		<$/block$>
		<div class='footer section'>
			<div class='footer__column section__column'><$include '102-FOOTER'$></div>
		</div>
		<$include '103-BODY_AFTER'$>
	</body>
</html>