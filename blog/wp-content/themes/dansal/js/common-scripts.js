jQuery(document).ready(function($){

	/* Prepend Menu Icons */
	$('.widget_categories ul li, .widget_archive ul li').prepend('<i class="genericon genericon-category"></i>');
	$('.widget_recent_entries ul li').prepend('<i class="genericon genericon-edit"></i>');
	$('.widget_recent_comments ul li').prepend('<i class="genericon genericon-activity"></i>');
    $('.widget_nav_menu ul li').prepend('<i class="genericon genericon-category"></i>');	
    $('.widget_meta ul li').prepend('<i class="genericon genericon-cog"></i>');	
 $('.widget_pages ul li').prepend('<i class="genericon genericon-plus"></i>');	
	
});