const clientes = [
  { 
    "00103228" : {
      id: 1,
      fecha: "10-ene-21",
      monto: 37500.00,
      estado: "Pendiente"
    }
  },
  { 
    "00103228" : {
      id: 2,
      fecha: "19-ene-21",
      monto: 725.18,
      estado: "Pendiente"
    }
  },
  { 
    "00103228" : {
      id: 3,
      fecha: "31-ene-21",
      monto: 1578.22,
      estado: "Pendiente"
    }
  },
  { 
    "00103228" : {
      id: 4,
      fecha: "10-ene-21",
      monto: 380.00,
      estado: "Pendiente"
    }
  },
  { 
    "70099925" : {
      id: 1,
      fecha: "07-ene-21",
      monto: 2175.25,
      estado: "Pagado"
    }
  },
  { 
    "70099925" : {
      id: 1,
      fecha: "13-ene-21",
      monto: 499.99,
      estado: "Pagado"
    }
  },
  { 
    "70099925" : {
      id: 1,
      fecha: "24-ene-21",
      monto: 5725.18,
      estado: "Pendiente"
    }
  },
  { 
    "70099925" : {
      id: 1,
      fecha: "07-feb-21",
      monto: 876.13,
      estado: "Pendiente"
    }
  },
  { 
    "00298185" : {
      id: 1,
      fecha: "04-feb-21",
      monto: 545.55,
      estado: "Pendiente"
    }
  },
  { 
    "15000125" : {
      id: 1,
      fecha: "31-dic-20",
      monto: 15220.00,
      estado: "Pagado"
    }
  }
]



const params = {
  fecha_actual: "15-feb-21",
  cliente: "00103228",
  tasa_iva: 16,
  dias_year: 360
}

const meses = {
  ene: 1,
  feb: 2,
  mar: 3,
  abr: 4,
  may: 5,
  jun: 6,
  jul: 7,
  ago: 8,
  sep: 9,
  oct: 10,
  nov: 11,
  dic: 12,
}

const tasas = [
  {
      min: 1,
      max: 1,
      interes: 7.00
  },
  {
      min: 2,
      max: 7,
      interes: 6.50
  },
  {
      min: 8,
      max: 15,
      interes: 6.00
  },
  {
      min: 16,
      max: 30,
      interes: 5.50
  },
  {
    min: 31,
    max: 360,
    interes: 5.00
  }
]



function calculate(params, cliente) {
  let plazo;
  const start = params.fecha_actual.substring(3,6);
  const end = cliente.fecha.substring(3,6);
  const startYears = params.fecha_actual.substring(7,9);
  const endYears = cliente.fecha.substring(7,9);

  // todo: extra validations
  if (startYears === endYears) {
    plazo = meses[start] - meses[end];
  } 

  return plazo;

}

function calculateInteres(plazo, params, cliente) {
  let rate;
  for (let tasa of tasas) {
    if (tasa.min >= plazo && tasa.max <= plazo) {
      rate = tasa.interes;
    }
  }

  const interesRate = rate * .010;
  let interes = (cliente.monto * plazo * interesRate) / params.dias_year;
  interes = Number((interes).toFixed(2));
  return interes;
}

function calculateIVA(interesRate, params) {
  return Number((interesRate * (params.tasa_iva * .010)).toFixed(2));
}

function calculatePayment(interes, iva, cliente) {
  return Number(cliente.monto + interes + iva).toFixed(2);;
}

function paymentList(params) {
  let pendingPayments = []
  
  for (let cliente of clientes) {
    if (cliente[params.cliente] && cliente[params.cliente].estado === 'Pendiente') {
      const actualPlazo = calculate(params, cliente[params.cliente])
      const interesToPay = calculateInteres(actualPlazo, params, cliente[params.cliente]);
      const IVA = calculateIVA(interesToPay, params);
      const payment = calculatePayment(interesToPay, IVA, cliente[params.cliente]);

      let ResponseObject = {}
      ResponseObject.plazo = actualPlazo;
      ResponseObject.interes = interesToPay;
      ResponseObject.iva = IVA;
      ResponseObject.payment = payment;
      pendingPayments.push(ResponseObject);
    }
  }

  return pendingPayments
}


const PendingPaymentsList = paymentList(params);

console.log(PendingPaymentsList)
