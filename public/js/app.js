$(function () {
    // var token = $("meta[name=csrf_token]").attr('content');
   // $.ajax({
   //     url: '/',
   //     type: 'POST',
   //     data: {
   //         _token: csrf,
   //         name: 'Cali',
   //         email: 'cali@cali.com'
   //     },
   //     success: function (data) {
   //         if (data.status !== 'error') {
   //             console.log(data.message);
   //         } else {
   //             console.log(data.message);
   //         }
   //     }
   // });

    // console.log(token);


    // DOM event 按钮事件绑定
    // $('button[type=submit]').on('click', function (ev) {
    //     ev.preventDefault();
    //     var button = ev.target,
    //         form = $(button).parents("form")[0];
    //
    //     $.post({
    //         url: '/',
    //         data: $(form).serialize(),
    //         success: function (data) {
    //
    //         }
    //     })
    // });

    // DOM event 表单绑定
    // $("form:not([no-ajax])").each(function () {
    //     $(this).on('submit', function (ev) {
    //         ev.preventDefault();
    //
    //         $.ajax({
    //             url: this.action,
    //             type: this.method,
    //             data: $(this).serialize(),
    //             success: function (data) {
    //                 if (data.redirect == undefined) {
    //                     toastr.success(data.message);
    //                 } else {
    //                     window.location.href = data.redirect;
    //                 }
    //             },
    //             error: function (err) {
    //                 if (err.status == 422) {
    //                     var errors = JSON.parse(err.responseText);
    //
    //                     for (var e in errors) {
    //                         // 遍历添加has-error类 与 1.5秒后自动删除
    //                         var sel = "[name=" + e + "]",
    //                             group = $(sel).parents(".form-group")[0];
    //                         $(group).addClass('has-error shaky');
    //                         setTimeout(function () {
    //                            $(group).removeClass('has-error shaky');
    //                         }, 2500);
    //                         // 显示右上角提示
    //                         toastr.error(errors[e][0]);
    //                     }
    //                 }
    //             }
    //         });
    //     }.bind(this));
    // });
});