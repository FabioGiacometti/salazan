import React from "react";

const Nuevos = () => {
  return (
    <div className="pt-24 overflow-hidden mt-8 max-w-6xl mx-auto px-16 mb-16 shadow-2xl rounded-lg pb-16">
      <h1 className="text-4xl text-red-800 leading-none tracking-tight">
        ¿Por qué comprar tu 0 km en Salazan Automotores?
      </h1>

      <div class="flex flex-wrap mb-4">
        <div class="w-auto md:w-1/3 mt-8 mr-0 sm:mr-6">
          <h2 className="text-red-800 text-lg font-extrabold">
            Te pagamos mejor el usado
          </h2>
          <p className="mt-8 text-gray-800">
            Sacale la máxima ventaja al valor de tu Usado. ¿Por qué entregarlo
            donde lo que te ofrecen por tu usado está muy lejos del valor de
            reventa? Vení y te hacemos una oferta mucho más razonable para hacer
            el mejor negocio!
          </p>
        </div>
        <div class="w-auto md:w-1/3 mt-8 mr-0 sm:mr-6">
          <h2 className="text-red-800 text-lg font-extrabold">
            Recibimos tu Plan de Ahorro
          </h2>
          <p className="mt-8 text-gray-800">
            ¿Estás pagando un plan de ahorro y querés entergarlo en parte de
            pago? Acercate, te cotizamos el plan y te hacemos una oferta para
            que puedas sacar el máximo provecho a tus posibilidades de llegar al
            0 kilómetro!
          </p>
        </div>
        <div class="w-auto md:w-1/3 mt-8">
          <h2 className="text-red-800 text-lg font-extrabold">
            Ofrecemos Financiación Propia
          </h2>
          <p className="mt-8 text-gray-800">
            ¿No tenés acceso a un crédito bancario?, ¿el préstamo que te ofrecen
            no te alcanza? o simplemente ¿no querés operar con los bancos? Vení
            a Salazan Automotores y obtené tu crédito en el acto y sin demoras!
          </p>
        </div>
      </div>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ryrb1rhLDIY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video" className="mx-auto"></iframe>
    </div>
  );
};

export default Nuevos;
