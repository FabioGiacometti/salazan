const vehiculos = [
  {
    foto: "mostrar_imagen_detalle.asp?id=8302",
    specs: "2019       - NAFTA#3267",
    precio: "$ 670.000",
    modelo: "FORD KA KA 1.5 S"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=",
    specs: "2019       - NAFTA#3362",
    precio: "$ 1.235.000",
    modelo: "CHEVROLET ONIX PLUS  1.0 T II PREMIER AT"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=7895",
    specs: "2018       - NAFTA#3183",
    precio: "$ 2.000.000",
    modelo: "TOYOTA RAV 4 2.0 5 PTAS 4X2 TX CTV  L/13"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8522",
    specs: "2018       - NAFTA#3315",
    precio: "$ 510.000",
    modelo: "CHEVROLET PRISMA PRISMA 1.4 LS JOY L/17 +"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8651",
    specs: "2018       - DIESEL#3338",
    precio: "$ 970.000",
    modelo: "CITROEN C 4. LOUNGE 1.6 HDI FEEL PACK L/18"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8644",
    specs: "2017       - NAFTA#3339",
    precio: "$ 1.600.000",
    modelo: "FORD RANGER RANGER XLT 3.2 TDI DC 4X2"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8664",
    specs: "2017       - DIESEL#3341",
    precio: "$ 1.560.000",
    modelo: "FORD RANGER RANGER XLT 3.2 TDI DC 4X2"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8669",
    specs: "2017       - DIESEL#3342",
    precio: "$ 1.430.000",
    modelo: "CHEVROLET S 10 2.8 TD 4X2 DC LT L/14"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8638",
    specs: "2017       - NAFTA#3326",
    precio: "$ 480.000",
    modelo: "CHEVROLET ONIX 1.4 LS JOY L/17"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8505",
    specs: "2017       - NAFTA#3313",
    precio: "$ 540.000",
    modelo: "CHEVROLET PRISMA 1.4 4PTAS. LT."
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8496",
    specs: "2017       - NAFTA#3309",
    precio: "$ 560.000",
    modelo: "CITROEN C-ELYSEE  VTI 115 FEEL"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8396",
    specs: "2017       - NAFTA#3290",
    precio: "$ 550.000",
    modelo: "RENAULT NUEVO SANDERO DYNAMIQUE 1.6 5 PUERTAS"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8548",
    specs: "2017       - NAFTA#3275",
    precio: "$ 635.000",
    modelo: "FORD FIESTA FIESTA 1.6 5P SE PLUS"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8374",
    specs: "2017       - NAFTA#3287",
    precio: "$ 500.000",
    modelo: "CHEVROLET SONIC 1.6 5 PTAS LTZ"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8103",
    specs: "2017       - NAFTA#3229",
    precio: "$ 870.000",
    modelo: "FORD FOCUS L/14 2.0 4 P SE PLUS"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=",
    specs: "2017       - NAFTA#3358",
    precio: "$ 0",
    modelo: "CHEVROLET ONIX 1.4 LS JOY + L/17"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8608",
    specs: "2016       - NAFTA#3332",
    precio: "$ 465.000",
    modelo: "VOLKSWAGEN VOYAGE 1.6 TRENDLINE (PACK1 + 2AB + ABS)"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8491",
    specs: "2016       - NAFTA#3308",
    precio: "$ 680.000",
    modelo: "CHEVROLET SPIN 1.8 LTZ 5 AS ACTIV"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8694",
    specs: "2016       - NAFTA#3349",
    precio: "$ 650.000",
    modelo: "RENAULT DUSTER 1.6 4X2 EXPRESION"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8531",
    specs: "2016       - NAFTA#3227",
    precio: "$ 530.000",
    modelo: "VOLKSWAGEN SAVEIRO 1.6 N CABINA DOBLE POWER"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=7758",
    specs: "2016       - NAFTA#3152",
    precio: "$ 1.250.000",
    modelo: "HONDA HR-V 1.8 EXL CVT"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=7823",
    specs: "2016       - DIESEL#3162",
    precio: "$ 1.600.000",
    modelo: "TOYOTA HILUX L/16 2.8 DC 4X2 TDI SRV PACK"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=7883",
    specs: "2016       - NAFTA#3180",
    precio: "$ 820.000",
    modelo: "FORD FOCUS FOCUS L/16 2.0 5P SE PLUS POWER"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=7231",
    specs: "2015       - NAFTA#3052",
    precio: "$ 460.000",
    modelo: "VOLKSWAGEN UP MOVE"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8055",
    specs: "2015       - NAFTA#3221",
    precio: "$ 670.000",
    modelo: "TOYOTA COROLLA 1.8 XEI L/14 PACK"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8580",
    specs: "2015       - NAFTA#3324",
    precio: "$ 480.000",
    modelo: "PEUGEOT 208 ACTIVE 1.5N"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8545",
    specs: "2015       - NAFTA#3318",
    precio: "$ 820.000",
    modelo: "VOLKSWAGEN GOLF VII 1.4 TSI CONFORTLINE"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8674",
    specs: "2015       - NAFTA#3343",
    precio: "$ 1.370.000",
    modelo: "VOLKSWAGEN AMAROK 2.0TD 4X4 DC HIG. 180HP PK"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8743",
    specs: "2015       - NAFTA#3345",
    precio: "$ 460.000",
    modelo: "RENAULT LOGAN 1.6 8V AUTHENTIQUE PACK I"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8677",
    specs: "2015       - NAFTA#3346",
    precio: "$ 630.000",
    modelo: "PEUGEOT 308 1.6 ACTIVE"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8619",
    specs: "2015       - NAFTA#3333",
    precio: "$ 655.000",
    modelo: "FORD FIESTA 1.6 5P TITANIUM POWER SHIFT"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=",
    specs: "2015       - NAFTA#3337",
    precio: "$ 545.000",
    modelo: "VOLKSWAGEN UP HIGH 1.0 AT"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8727",
    specs: "2014       - NAFTA#3353",
    precio: "$ 650.000",
    modelo: "TOYOTA COROLLA 1.8 XEI L/14"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8612",
    specs: "2014       - NAFTA#3331",
    precio: "$ 600.000",
    modelo: "VOLKSWAGEN VENTO 2.5 170 HP LUXURY L/11"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8572",
    specs: "2014       - NAFTA#3322",
    precio: "$ 367.000",
    modelo: "PEUGEOT  207 COMPACT 1.4  XR//ACTIVE"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8510",
    specs: "2014       - NAFTA#3314",
    precio: "$ 560.000",
    modelo: "PEUGEOT PARTNER PAT 1.6 VTC PLUSL10/17"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8272",
    specs: "2014       - NAFTA#3263",
    precio: "$ 460.000",
    modelo: "RENAULT FLUENCE 2.0 PRIVILIGE"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8228",
    specs: "2014       - NAFTA#3255",
    precio: "$ 630.000",
    modelo: "VOLKSWAGEN VENTO 2.5 170 HP LUXURY TIP L/11"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=7285",
    specs: "2014       - NAFTA#3059",
    precio: "$ 425.000",
    modelo: "CHEVROLET MONTANA 1.8 SPORT."
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=6580",
    specs: "2014       - NAFTA#2944",
    precio: "$ 695.000",
    modelo: "FORD RANGER RANGER XL 2.5 DC 4X2 L/12"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=7790",
    specs: "2013       - NAFTA#3158",
    precio: "$ 800.000",
    modelo: "HONDA CIVIC EXS 1.8 L/12 AUT"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=7980",
    specs: "2013       - NAFTA#3197",
    precio: "$ 720.000",
    modelo: "CHRYSLER JEEP PATRIOT 2. 4 SPORT"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8526",
    specs: "2013       - DIESEL#3311",
    precio: "$ 880.000",
    modelo: "VOLKSWAGEN AMAROK 2.0TD 4X4 DC HIGHLINE"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8583",
    specs: "2013       - NAFTA#3325",
    precio: "$ 380.000",
    modelo: "PEUGEOT  207 COMPACT 1.4 XS//ALLURE"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8599",
    specs: "2013       - NAFTA#3329",
    precio: "$ 340.000",
    modelo: "FIAT PALIO 1.4 ATTRACTIVE L/12 TOP."
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8626",
    specs: "2013       - NAFTA#3334",
    precio: "$ 575.000",
    modelo: "VOLKSWAGEN VENTO 2.5 170 HP LUXURY L/11"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=",
    specs: "2013       - NAFTA#3361",
    precio: "$ 0",
    modelo: "PEUGEOT PARTNER 1.6 HDI CONFORT PLC AB L10"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8705",
    specs: "2012       - NAFTA#3352",
    precio: "$ 600.000",
    modelo: "VOLKSWAGEN VENTO 2.5 170 HP LUXURY L/11"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8565",
    specs: "2012       - NAFTA#3323",
    precio: "$ 380.000",
    modelo: "FORD FOCUS FOCUS LN 1.6 4 P TREND EXE"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8382",
    specs: "2012       - NAFTA#3288",
    precio: "$ 520.000",
    modelo: "TOYOTA COROLLA 1.8 XEI PACK AUT. L/11"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8402",
    specs: "2012       - NAFTA#3292",
    precio: "$ 460.000",
    modelo: "CHEVROLET CRUZE 1.8 LTZ 5PTAS."
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=7901",
    specs: "2012       - NAFTA#3184",
    precio: "$ 1.850.000",
    modelo: "AUDI TT 1.8 FSI TURBO PREMIUM"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8244",
    specs: "2012       - NAFTA#3260",
    precio: "$ 435.000",
    modelo: "FORD FIESTA 1.6 5P TITANIUM"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=",
    specs: "2012       - NAFTA#3244",
    precio: "$ 0",
    modelo: "VOLKSWAGEN GOL 1.6 5 P POWER LN AA DH"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8307",
    specs: "2012       - DIESEL#3271",
    precio: "$ 970.000",
    modelo: "VOLKSWAGEN AMAROK 2.0TD 4X2 DC HIGHLINE"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8466",
    specs: "2012       - NAFTA#2924",
    precio: "$ 300.000",
    modelo: "VOLKSWAGEN GOL 1.6 5 P TREND L/13 PK I"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=5627",
    specs: "2012       - NAFTA#2667",
    precio: "$ 1.800.000",
    modelo: "AUDI Q5 2.0 T FSI QUATTRO S - TRONIC"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=7204",
    specs: "2011       - DIESEL#3050",
    precio: "$ 0",
    modelo: "FORD TRANSIT TRANSIT 2.4 TDI FURGON CORTO"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8000",
    specs: "2011       - NAFTA#3203",
    precio: "$ 820.000",
    modelo: "AUDI A4 1.8 TFSI L/08 PLUS"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8517",
    specs: "2011       - NAFTA#3302",
    precio: "$ 375.000",
    modelo: "NISSAN TIIDA 1.8 VISIA"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8629",
    specs: "2011       - NAFTA#3335",
    precio: "$ 320.000",
    modelo: "FIAT UNO 1.4 5 PTAS ATTRACTIVE PACK SEG"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8732",
    specs: "2011       - NAFTA#3356",
    precio: "$ 340.000",
    modelo: "FORD ECO SPORT ECO SPORT 1.6 XL PLUS L/07"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8555",
    specs: "2010       - NAFTA#3319",
    precio: "$ 300.000",
    modelo: "FORD FOCUS FOCUS LN 2.0 5 P TREND"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8471",
    specs: "2009       - NAFTA#3303",
    precio: "$ 430.000",
    modelo: "HONDA FIT 1.5 EX 5 PTAS L/09  L/13"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8441",
    specs: "2009       - NAFTA#3300",
    precio: "$ 350.000",
    modelo: "FORD ECO SPORT ECO SPORT 1.6 XLS"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8586",
    specs: "2009       - NAFTA#3306",
    precio: "$ 330.000",
    modelo: "PEUGEOT 307 2.0 XS HDI"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8098",
    specs: "2009       - NAFTA#3206",
    precio: "$ 280.000",
    modelo: "CHEVROLET MERIVA 1.8 GLS"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=7738",
    specs: "2009       - NAFTA#3147",
    precio: "$ 365.000",
    modelo: "TOYOTA CAMRY 2.4 AUT L/2006"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8721",
    specs: "2009       - NAFTA#3355",
    precio: "$ 350.000",
    modelo: "VOLKSWAGEN BORA 2.0 TRENDLINE L/07"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8538",
    specs: "2008       - NAFTA#3317",
    precio: "$ 540.000",
    modelo: "HONDA CR-V CRV 2.4 4X2 LX AUT L/07"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=",
    specs: "2007       - NAFTA#3295",
    precio: "$ 300.000",
    modelo: "PEUGEOT 307 1.6  XS"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8689",
    specs: "2007       - NAFTA#3348",
    precio: "$ 290.000",
    modelo: "VOLKSWAGEN BORA 2.0 TRENDLINE"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8595",
    specs: "2007       - NAFTA#3149",
    precio: "$ 200.000",
    modelo: "CHEVROLET CORSA 2  1.8 GL AA DH"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=3505",
    specs: "2007       - NAFTA#1816",
    precio: "$ 290.000",
    modelo: "PEUGEOT PARTNER PATA 1.9 D FULL  2 PLC"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8699",
    specs: "2007       - NAFTA#3219",
    precio: "$ 210.000",
    modelo: "CHEVROLET CORSA 1.6 4 P GL AA SUPER (CLASSIC)"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=6048",
    specs: "2006       - NAFTA#2752",
    precio: "$ 270.000",
    modelo: "HONDA CIVIC CIVIC EX 1.5 AUT"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=",
    specs: "2005       - NAFTA#2805",
    precio: "$ 180.000",
    modelo: "CHEVROLET CORSA 2  1.8 GL AA DH"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=8604",
    specs: "2005       - NAFTA#3330",
    precio: "$ 0",
    modelo: "FORD RANGER RANGER XL 2.8 TDI DC 4X2 PLUS L04"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=",
    specs: "2001       - NAFTA#3113",
    precio: "$ 0",
    modelo: "PEUGEOT 206 1.4 XR CONFORT"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=",
    specs: "1999       - DIESEL#3312",
    precio: "$ 375.000",
    modelo: "FORD TRANSIT TRANSIT 2.5 D 190 L"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=2692",
    specs: "1996       - NAFTA#1482",
    precio: "$ 130.000",
    modelo: "PEUGEOT 405 2.0 SRI ABS"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=",
    specs: "1994       - NAFTA#1587",
    precio: "$ 0",
    modelo: "SUBARU IMPREZA GL 1.8 AWD 5 PTAS AUT"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=7607",
    specs: "1994       - NAFTA#3073",
    precio: "$ 90.000",
    modelo: "RENAULT R 9 RL"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=",
    specs: "2017       - NAFTA#3305",
    precio: "$ 0",
    modelo: "HONDA CB 190 CB 190"
  },
  {
    foto: "mostrar_imagen_detalle.asp?id=",
    specs: "2015       - NAFTA#3298",
    precio: "$ 0",
    modelo: "YAMAHA YBR 125."
  }
];
export default vehiculos