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
        close: false,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: type === "success" 
                ? "#007bff"              // azul moderno (como tu encabezado)
                : "#2c2c2c",             // gris oscuro en lugar de negro puro
            color: "#ffffff", 
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            padding: "12px 20px",
            fontSize: "16px",
            fontWeight: "500",
            margin: "10px"
        }
    }).showToast();
}
