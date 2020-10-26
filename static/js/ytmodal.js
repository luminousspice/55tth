var modalContent = "";
    // instanciate new modal
var modal = new tingle.modal({
    closeMethods: ['overlay', 'button', 'escape'],
    beforeClose: function() {
        // モダルの要素内を削除
        modal.setContent("");
        return true;
    }
});
var modalTrigger = document.querySelectorAll('[data-modal]');
if(modalTrigger.length > 0){
    for (let i = 0; i < modalTrigger.length; i++) {
        var el = modalTrigger[i];
        _addModalEvent(el);
    }
}
function _addModalEvent(el){
    el.addEventListener('click',function(event){
        // 通常のクリックイベントをキャンセル
        event.preventDefault();
        var target = el.getAttribute('data-modal');
        var src = el.getAttribute('data-src');
        if(src!=""){
            // .iframe-content要素を生成
            var iframeContent = document.createElement('div');
            iframeContent.setAttribute("class","iframe-content");
//            iframeContent.setAttribute("style","position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;");
            // iframe要素を生成
            var iframe = document.createElement('iframe');
            // 必要な属性を付与する
            iframe.setAttribute("allow","autoplay; encrypted-media");
            iframe.setAttribute("allowfullscreen","1");
            iframe.setAttribute("frameborder","0");
//            iframe.setAttribute("style","position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;");
            // src属性をセット
            iframe.setAttribute("src",src);
            // .iframe-content要素に追加
            iframeContent.appendChild(iframe);
 
            // modalにセット
            modal.setContent(iframeContent);
            // modalをopen
            modal.open();
        }
    })
}

