document.addEventListener('DOMContentLoaded', function(){
  const showBtn = document.getElementById('showBtn');
  const clearBtn = document.getElementById('clearBtn');
  const paymentType = document.getElementById('paymentType');
  const semester = document.getElementById('semester');
  const totalAmount = document.getElementById('totalAmount');
  const downPayment = document.getElementById('downPayment');
  const netAmount = document.getElementById('netAmount');
  const payOnline = document.getElementById('payOnline');

  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');
  const modalConfirm = document.getElementById('modalConfirm');

  function recalc(){
    // simple parsing that supports commas
    let total = parseFloat(totalAmount.textContent.replace(/,/g,''));
    let down = parseFloat(downPayment.textContent.replace(/,/g,''));
    if(isNaN(total)) total = 0;
    if(isNaN(down)) down = 0;
    const net = (total - down).toFixed(2);
    netAmount.textContent = net.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Example: show uses selected options to populate values (in a real app, it would fetch)
  showBtn.addEventListener('click', function(){
    // pretend to update totals based on selection
    if(paymentType.value.toLowerCase().includes('tuition')){
      totalAmount.textContent = '50,000.00';
      downPayment.textContent = '5,000.00';
    } else {
      totalAmount.textContent = '25,385.00';
      downPayment.textContent = '500.00';
    }
    recalc();
  });

  clearBtn.addEventListener('click', function(){
    paymentType.selectedIndex = 0;
    semester.selectedIndex = 0;
    totalAmount.textContent = '0.00';
    downPayment.textContent = '0.00';
    netAmount.textContent = '0.00';
  });

  payOnline.addEventListener('click', function(e){
    e.preventDefault();
    // populate modal
    document.getElementById('m_paymentType').textContent = paymentType.value;
    document.getElementById('m_semester').textContent = semester.value;
    document.getElementById('m_net').textContent = netAmount.textContent;
    modal.setAttribute('aria-hidden','false');
  });

  modalClose.addEventListener('click', function(){ modal.setAttribute('aria-hidden','true'); });
  modalConfirm.addEventListener('click', function(){
    modal.setAttribute('aria-hidden','true');
    alert('Proceeding to payment gateway... (mock)');
  });

  // initial calc
  recalc();
});
