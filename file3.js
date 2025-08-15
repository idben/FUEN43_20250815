var tooltips = document.querySelectorAll("[data-bs-toggle=tooltip]");
var popovers = document.querySelectorAll("[data-bs-toggle=popover]");

tooltips.forEach((tooltip) => {
    new bootstrap.Tooltip(tooltip);
});

popovers.forEach((popover) => {
    new bootstrap.Popover(popover);
});