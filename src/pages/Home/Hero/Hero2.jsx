import React, { useState } from "react";
import bgImg from "../../../assets/home/banner-2.jpg";
import Modal2 from "./Modal2";

const Hero2 = () => {
  const [open21, setOpen21] = useState(false);
  const [open22, setOpen22] = useState(false);
  const [open23, setOpen23] = useState(false);
  const [open24, setOpen24] = useState(false);
  const [open25, setOpen25] = useState(false);
  const [open26, setOpen26] = useState(false);
  const [open27, setOpen27] = useState(false);
  const [open28, setOpen28] = useState(false);
  const [open29, setOpen29] = useState(false);
  const [open2A, setOpen2A] = useState(false);
  const [open2B, setOpen2B] = useState(false);
  const [open2C, setOpen2C] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="min-h-screen flex justify-start pl-11 items-center text-white bg-black bg-opacity-10">
        <div>
          <div className="flex justify-center items-center gap-10 bg-opacity-10">
            <button
              className="px-7 py-7 rounded-lg bg-red-600 font-bold uppercase"
              onClick={() => setOpen21(true)}
            >
              Join Today
            </button>

            <Modal2 open={open21} onClose={() => setOpen21(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-500">
                    모달 테스트 1
                  </h3>
                  <p className="text-sm text-gray-500">테스트 페이지입니다.</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Delete</button>
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen21(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal2>

            <button
              className="px-7 py-7 rounded-lg bg-pink-500 font-bold uppercase"
              onClick={() => setOpen22(true)}
            >
              Join Today
            </button>
            <Modal2 open={open22} onClose={() => setOpen22(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-500">
                    모달 테스트 2
                  </h3>
                  <p className="text-sm text-gray-500">테스트 페이지입니다.</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Delete</button>
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen22(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal2>

            <button
              className="px-7 py-7 rounded-lg bg-orange-500 font-bold uppercase"
              onClick={() => setOpen23(true)}
            >
              Join Today
            </button>
            <Modal2 open={open23} onClose={() => setOpen23(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-500">
                    모달 테스트 3
                  </h3>
                  <p className="text-sm text-gray-500">테스트 페이지입니다.</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Delete</button>
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen23(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal2>

            <button
              className="px-7 py-7 rounded-lg bg-orange-300 font-bold uppercase"
              onClick={() => setOpen24(true)}
            >
              Join Today
            </button>
            <Modal2 open={open24} onClose={() => setOpen24(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-500">
                    모달 테스트 4
                  </h3>
                  <p className="text-sm text-gray-500">테스트 페이지입니다.</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Delete</button>
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen24(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal2>

            <button
              className="px-7 py-7 rounded-lg bg-yellow-500 font-bold uppercase"
              onClick={() => setOpen25(true)}
            >
              Join Today
            </button>
            <Modal2 open={open25} onClose={() => setOpen25(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-500">
                    모달 테스트 5
                  </h3>
                  <p className="text-sm text-gray-500">테스트 페이지입니다.</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Delete</button>
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen25(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal2>

            <button
              className="px-7 py-7 rounded-lg bg-green-400 font-bold uppercase"
              onClick={() => setOpen26(true)}
            >
              Join Today
            </button>
            <Modal2 open={open26} onClose={() => setOpen26(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-500">
                    모달 테스트 6
                  </h3>
                  <p className="text-sm text-gray-500">테스트 페이지입니다.</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Delete</button>
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen26(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal2>
          </div>

          <div className="flex justify-center py-10 items-center gap-10 bg-opacity-10">
            <button
              className="px-7 py-7 rounded-lg bg-green-500 font-bold uppercase"
              onClick={() => setOpen27(true)}
            >
              Join Today
            </button>
            <Modal2 open={open27} onClose={() => setOpen27(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-500">
                    모달 테스트 7
                  </h3>
                  <p className="text-sm text-gray-500">테스트 페이지입니다.</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Delete</button>
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen27(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal2>

            <button
              className="px-7 py-7 rounded-lg bg-sky-400 font-bold uppercase"
              onClick={() => setOpen28(true)}
            >
              Join Today
            </button>
            <Modal2 open={open28} onClose={() => setOpen28(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-500">
                    모달 테스트 8
                  </h3>
                  <p className="text-sm text-gray-500">테스트 페이지입니다.</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Delete</button>
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen28(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal2>

            <button
              className="px-7 py-7 rounded-lg bg-blue-600 font-bold uppercase"
              onClick={() => setOpen29(true)}
            >
              Join Today
            </button>
            <Modal2 open={open29} onClose={() => setOpen29(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-500">
                    모달 테스트 9
                  </h3>
                  <p className="text-sm text-gray-500">테스트 페이지입니다.</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Delete</button>
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen29(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal2>

            <button
              className="px-7 py-7 rounded-lg bg-purple-500 font-bold uppercase"
              onClick={() => setOpen2A(true)}
            >
              Join Today
            </button>
            <Modal2 open={open2A} onClose={() => setOpen2A(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-500">
                    모달 테스트 10
                  </h3>
                  <p className="text-sm text-gray-500">테스트 페이지입니다.</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Delete</button>
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen2A(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal2>

            <button
              className="px-7 py-7 rounded-lg bg-gray-900 font-bold uppercase"
              onClick={() => setOpen2B(true)}
            >
              Join Today
            </button>
            <Modal2 open={open2B} onClose={() => setOpen2B(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-500">
                    모달 테스트 11
                  </h3>
                  <p className="text-sm text-gray-500">테스트 페이지입니다.</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Delete</button>
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen2B(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal2>

            <button
              className="px-7 py-7 rounded-lg bg-amber-700 font-bold uppercase"
              onClick={() => setOpen2C(true)}
            >
              Join Today
            </button>
            <Modal2 open={open2C} onClose={() => setOpen2C(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-500">
                    모달 테스트 12
                  </h3>
                  <p className="text-sm text-gray-500">테스트 페이지입니다.</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Delete</button>
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen2C(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
