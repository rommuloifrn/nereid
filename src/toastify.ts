import Toastify from "toastify-js";


export abstract class ToastMaker {
    static spitToast(text: string) {
        Toastify({
            text: text,
            duration: 3000,
            //destination: "https://github.com/apvarun/toastify-js",
            newWindow: false,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #9333ea, #fa766b)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
}