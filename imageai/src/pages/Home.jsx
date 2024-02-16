import React from "react";
function Home() {
  return (
    <>
      <div className="flex justify-center items-center space-x-60 ">
        <div className="mt-5">
          <img
            src="https://ouch-cdn2.icons8.com/KKdfX51dzkGuNBKK8iMILIrPLP_gph0rzhHteU99gEo/rs:fit:368:429/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzU5/LzAzNWU5ZWFkLWY5/ZTgtNDE3Mi04NmYx/LTEyYmY0YjQ4MTk1/ZC5wbmc.png"
            alt=""
          />
        </div>
        <div className=" mr-5">
          <h1 className="font-bold text-3xl">BARD</h1>
          <p className="">
            Introducing BARD an image recognition AI. <br />
            Optio placeat illo cum assumenda incidunt quibusdam quam adipisci{" "}
            <br />
            aperiam expedita alias excepturi eligendi quod, dolore esse nisi{" "}
            <br />
            veritatis delectus architecto quaerat.
          </p>

          <button className="bg-black text-white mt-10 rounded-3xl px-8 py-3">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
