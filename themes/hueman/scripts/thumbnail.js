/**
* Thumbnail Helper
* @description Get the thumbnail url from a post
* @example
*     <%- thumbnail(post) %>
*/
hexo.extend.helper.register('thumbnail', function (post) {
    var url = post.thumbnail || '';
    if (!url) {
        var imgPattern = /\<img\s.*?\s?src\s*=\s*['|"]?([^\s'"]+).*?\>/ig;
        var result = imgPattern.exec(post.content);
        if (result && result.length > 1) {
            url = result[1];
        }
    }
    return url;
});

// Examples of helper
hexo.extend.helper.register('htmlGenerator', function(args){
    if(!args || !args.json || args.json.length == 0)return "";
    
    var returnHTML = "";
    
    function generateHTML(list){
      
      var ret = "";
      ret += "<li class=\"" + args.class + "-item\">";
      
      if(list.date && list.date != ""){
          ret += '<div class="'+args.class+'-date">' + list.date + "</div>";
      }
      
      if(list.thumbnail && list.thumbnail != ""){
          ret += '<div class="'+args.class+'-thumbnail">' + '<img src="'+list.thumbnail+'" />' + "</div>";
      }
      ret += '<div class="'+args.class+'-title"><h3><a href="' + list.path + '" title="'+ list.title +'" rel="bookmark">'+ list.title + "</a></h3></div>";
      if(list.excerpt &&  list.excerpt != ""){
          ret += '<div class="'+args.class+'-excerpt"><p>' + list.excerpt + "</p></div>";
      }
      
      ret +=  "</li>";
      return ret;
    }
    
    for(var i=0; i<args.json.length; i++){
        returnHTML += generateHTML(args.json[i]);
    }
    
    if(returnHTML != "")returnHTML = "<ul class=\"" + args.class + "\">" + returnHTML + "</ul>";
    
    return returnHTML;
  });