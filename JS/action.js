const plans = [
    { size: '100GB', price: '1.99', color: '#1a73e8' },
    { size: '200GB', price: '2.99', color: '#34a853' },
    { size: '2TB', price: '9.99', color: '#fbbc04' },
];

let selectedPlan = '100GB';

function renderPlans() {
    const plansContainer = document.getElementById('plans');
    plansContainer.innerHTML = plans.map(plan => `
        <div class="plan ${plan.size === selectedPlan ? 'selected' : ''}" onclick="selectPlan('${plan.size}')">
            <div class="color-dot" style="background-color: ${plan.color};"></div>
            <div class="plan-details">
                <div class="plan-size">${plan.size}</div>
                <div class="plan-price">$${plan.price}/mes</div>
            </div>
            <span class="check-icon">✓</span>
        </div>
    `).join('');
}

function selectPlan(size) {
    selectedPlan = size;
    renderPlans();
}

function updateStorage() {
    alert(`Has seleccionado el plan de ${selectedPlan}. ¡Gracias por actualizar!`);
}

renderPlans();

function btnFunc1(){
    document.getElementById("upgradeBtn2").classList.remove("upgradeBtnActive");
    document.getElementById("upgradeBtn1").classList.remove("upgradeBtn");
    document.getElementById("upgradeBtn2").classList.add("upgradeBtn");
    document.getElementById("upgradeBtn1").classList.add("upgradeBtnActive");
}

function btnFunc2(){
    document.getElementById("upgradeBtn1").classList.remove("upgradeBtnActive");
    document.getElementById("upgradeBtn2").classList.remove("upgradeBtn");
    document.getElementById("upgradeBtn1").classList.add("upgradeBtn");
    document.getElementById("upgradeBtn2").classList.add("upgradeBtnActive");
}