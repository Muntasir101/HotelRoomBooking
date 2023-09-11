document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");
        const totalCostDiv = document.getElementById("totalCost");
        const nightsInput = document.getElementById("nights");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Check if the input is numeric
            if (!/^\d+$/.test(nightsInput.value)) {
                const errorMessage = nightsInput.getAttribute("data-error");
                totalCostDiv.innerHTML = `<p class="error">${errorMessage}</p>`;
                return;
            }

            const formData = new FormData(form);

            fetch("/", {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.error) {
                        totalCostDiv.innerHTML = `<p class="error">${data.error}</p>`;
                    } else {
                        totalCostDiv.innerHTML = `<p>Total Cost: $${data.total_cost}</p>`;
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        });
    });