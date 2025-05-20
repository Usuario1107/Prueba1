/* export function showMessage(message, type="success") {
    Toastify({
  text: message,
  duration: 3000,
  //destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "bottom", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: type === "success" ? "green" : "red"
  },
  //onClick: function(){} // Callback after click
   //ariaLive: "polite", // Mejora la accesibilidad
}).showToast();
} */

export function showMessage(message, type = "success") {
    Toastify({
        text: message,
        duration: 2000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: type === "success" ? "#25ff00" : "#FF0000", // Verde fosforescente o Rojo
            color: "#ffffff", 
            borderRadius: "10px",
            boxShadow: type === "success" 
                ? "0 4px 12px rgba(88, 190, 139, 0.32)" 
                : "0 4px 12px rgba(246, 98, 98, 0.32)", // Sombra verde o roja
            padding: "12px 20px",
            fontSize: "16px",
            fontWeight: "500",
            margin: "10px"
        }
    }).showToast();
}

