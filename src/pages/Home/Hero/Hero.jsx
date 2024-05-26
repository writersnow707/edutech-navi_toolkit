import React, { useState } from "react";
import bgImg from "../../../assets/home/banner-1.jpg";
import Modal from "./Modal";
import qrCode from "../../../assets/home/navitoolkit-qrcode.jpg";

const Hero = () => {
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [open14, setOpen14] = useState(false);
  const [open15, setOpen15] = useState(false);
  const [open16, setOpen16] = useState(false);
  const [open17, setOpen17] = useState(false);
  const [open18, setOpen18] = useState(false);
  const [open19, setOpen19] = useState(false);
  const [open1A, setOpen1A] = useState(false);
  const [open1B, setOpen1B] = useState(false);
  const [open1C, setOpen1C] = useState(false);

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
              onClick={() => setOpen11(true)}
            >
              버튼
            </button>

            <Modal open={open11} onClose={() => setOpen11(false)}>
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
                    onClick={() => setOpen11(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>

            <button
              className="px-7 py-7 rounded-lg bg-pink-500 font-bold uppercase"
              onClick={() => setOpen12(true)}
            >
              버튼
            </button>
            <Modal open={open12} onClose={() => setOpen12(false)}>
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
                    onClick={() => setOpen12(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>

            <button
              className="px-7 py-7 rounded-lg bg-orange-500 font-bold uppercase"
              onClick={() => setOpen13(true)}
            >
              버튼
            </button>
            <Modal open={open13} onClose={() => setOpen13(false)}>
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
                    onClick={() => setOpen13(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>

            <button
              className="px-7 py-7 rounded-lg bg-orange-300 font-bold uppercase"
              onClick={() => setOpen14(true)}
            >
              버튼
            </button>
            <Modal open={open14} onClose={() => setOpen14(false)}>
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
                    onClick={() => setOpen14(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>

            <button
              className="px-7 py-7 rounded-lg bg-yellow-500 font-bold uppercase"
              onClick={() => setOpen15(true)}
            >
              버튼
            </button>
            <Modal open={open15} onClose={() => setOpen15(false)}>
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
                    onClick={() => setOpen15(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>

            <button
              className="px-7 py-7 rounded-lg bg-green-400 font-bold uppercase"
              onClick={() => setOpen16(true)}
            >
              버튼
            </button>
            <Modal open={open16} onClose={() => setOpen16(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-500">
                    모달 페이지 6
                  </h3>
                  <p className="text-sm text-gray-500">테스트 페이지입니다.</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Delete</button>
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen16(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>
          </div>

          <div className="flex justify-center py-10 items-center gap-10 bg-opacity-10">
            <button
              className="px-7 py-7 rounded-lg bg-green-500 font-bold uppercase"
              onClick={() => setOpen17(true)}
            >
              버튼
            </button>
            <Modal open={open17} onClose={() => setOpen17(false)}>
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
                    onClick={() => setOpen17(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>

            <button
              className="px-7 py-7 rounded-lg bg-sky-400 font-bold uppercase"
              onClick={() => setOpen18(true)}
            >
              버튼
            </button>
            <Modal open={open18} onClose={() => setOpen18(false)}>
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
                    onClick={() => setOpen18(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>

            <button
              className="px-7 py-7 rounded-lg bg-blue-600 font-bold uppercase"
              onClick={() => setOpen19(true)}
            >
              버튼
            </button>
            <Modal open={open19} onClose={() => setOpen19(false)}>
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
                    onClick={() => setOpen19(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>

            <button
              className="px-7 py-7 rounded-lg bg-purple-500 font-bold uppercase"
              onClick={() => setOpen1A(true)}
            >
              버튼
            </button>
            <Modal open={open1A} onClose={() => setOpen1A(false)}>
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
                    onClick={() => setOpen1A(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>

            <button
              className="px-7 py-7 rounded-lg bg-gray-900 font-bold uppercase"
              onClick={() => setOpen1B(true)}
            >
              오픈카톡 접속
            </button>
            <Modal open={open1B} onClose={() => setOpen1B(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-500">
                    오픈카톡 QR코드
                  </h3>
                  <a
                    href="https://open.kakao.com/me/navitoolkit"
                    target="_blank"
                    className="text-sm text-blue-500"
                  >
                    해당 링크를 클릭하시거나,</a><p className="text-sm text-gray-500">아래 QR코드를 스캔해주세요.</p>
                  <img src={qrCode} />
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Delete</button>
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen1B(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>

            <button
              className="px-7 py-7 rounded-lg bg-amber-700 font-bold"
              onClick={() => setOpen1C(true)}
            >
              ChatGPT 대화
            </button>
            <Modal open={open1C} onClose={() => setOpen1C(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-500">
                    ChatGPT 연동 예정
                  </h3>
                  <p className="text-sm text-gray-500">추가 예정입니다.</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Delete</button>
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen1C(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
