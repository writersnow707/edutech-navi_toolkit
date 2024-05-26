import React, { useState } from "react";
import bgImg from "../../../assets/home/banner-3.jpg";
import Modal3 from "./Modal3";
import qrCode from "../../../assets/home/navitoolkit-qrcode.jpg";

const Hero3 = () => {
  const [open31, setOpen31] = useState(false);
  const [open32, setOpen32] = useState(false);
  const [open33, setOpen33] = useState(false);
  const [open34, setOpen34] = useState(false);
  const [open35, setOpen35] = useState(false);
  const [open36, setOpen36] = useState(false);
  const [open37, setOpen37] = useState(false);
  const [open38, setOpen38] = useState(false);
  const [open39, setOpen39] = useState(false);
  const [open3A, setOpen3A] = useState(false);
  const [open3B, setOpen3B] = useState(false);
  const [open3C, setOpen3C] = useState(false);

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
              onClick={() => setOpen31(true)}
            >
              버튼
            </button>

            <Modal3 open={open31} onClose={() => setOpen31(false)}>
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
                    onClick={() => setOpen31(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal3>

            <button
              className="px-7 py-7 rounded-lg bg-pink-500 font-bold uppercase"
              onClick={() => setOpen32(true)}
            >
              버튼
            </button>
            <Modal3 open={open32} onClose={() => setOpen32(false)}>
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
                    onClick={() => setOpen32(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal3>

            <button
              className="px-7 py-7 rounded-lg bg-orange-500 font-bold uppercase"
              onClick={() => setOpen33(true)}
            >
              버튼
            </button>
            <Modal3 open={open33} onClose={() => setOpen33(false)}>
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
                    onClick={() => setOpen33(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal3>

            <button
              className="px-7 py-7 rounded-lg bg-orange-300 font-bold uppercase"
              onClick={() => setOpen34(true)}
            >
              버튼
            </button>
            <Modal3 open={open34} onClose={() => setOpen34(false)}>
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
                    onClick={() => setOpen34(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal3>

            <button
              className="px-7 py-7 rounded-lg bg-yellow-500 font-bold uppercase"
              onClick={() => setOpen35(true)}
            >
              버튼
            </button>
            <Modal3 open={open35} onClose={() => setOpen35(false)}>
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
                    onClick={() => setOpen35(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal3>

            <button
              className="px-7 py-7 rounded-lg bg-green-400 font-bold uppercase"
              onClick={() => setOpen36(true)}
            >
              버튼
            </button>
            <Modal3 open={open36} onClose={() => setOpen36(false)}>
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
                    onClick={() => setOpen36(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal3>
          </div>

          <div className="flex justify-center py-10 items-center gap-10 bg-opacity-10">
            <button
              className="px-7 py-7 rounded-lg bg-green-500 font-bold uppercase"
              onClick={() => setOpen37(true)}
            >
              버튼
            </button>
            <Modal3 open={open37} onClose={() => setOpen37(false)}>
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
                    onClick={() => setOpen37(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal3>

            <button
              className="px-7 py-7 rounded-lg bg-sky-400 font-bold uppercase"
              onClick={() => setOpen38(true)}
            >
              버튼
            </button>
            <Modal3 open={open38} onClose={() => setOpen38(false)}>
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
                    onClick={() => setOpen38(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal3>

            <button
              className="px-7 py-7 rounded-lg bg-blue-600 font-bold uppercase"
              onClick={() => setOpen39(true)}
            >
              버튼
            </button>
            <Modal3 open={open39} onClose={() => setOpen39(false)}>
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
                    onClick={() => setOpen39(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal3>

            <button
              className="px-7 py-7 rounded-lg bg-purple-500 font-bold uppercase"
              onClick={() => setOpen3A(true)}
            >
              버튼
            </button>
            <Modal3 open={open3A} onClose={() => setOpen3A(false)}>
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
                    onClick={() => setOpen3A(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal3>

            <button
              className="px-7 py-7 rounded-lg bg-gray-900 font-bold uppercase"
              onClick={() => setOpen3B(true)}
            >
              오픈카톡 접속
            </button>
            <Modal3 open={open3B} onClose={() => setOpen3B(false)}>
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
                    해당 링크를 클릭하시거나,
                  </a>
                  <p className="text-sm text-gray-500">
                    아래 QR코드를 스캔해주세요.
                  </p>
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
            </Modal3>

            <button
              className="px-7 py-7 rounded-lg bg-amber-700 font-bold uppercase"
              onClick={() => setOpen3C(true)}
            >
              ChatGPT 대화
            </button>
            <Modal3 open={open3C} onClose={() => setOpen3C(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-500">
                    ChatGPT 연동 예정
                  </h3>
                  <p className="text-sm text-gray-500">테스트 페이지입니다.</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Delete</button>
                  <button
                    className="btn btn-light w-full"
                    onClick={() => setOpen3C(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
