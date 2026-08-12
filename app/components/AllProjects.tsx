import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const AllProjects = () => {
  const darkMode = useSelector((state: any) => state.theme.darkMode);
  const router = useRouter();

  return (
    <div
      className={`${darkMode
        ? 'bg-zinc-900 text-white'
        : 'bg-gray-100 text-gray-800'
        } p-2.5 sm:p-4 mt-4 rounded-xl transition-colors duration-200`}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center">
          <div
            className={`w-2 h-2 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'
              } rounded-full mr-2`}
          ></div>
          <span className="text-sm sm:text-lg font-medium">Projects</span>
        </div>
        <div
          onClick={() => router.push("/projects")}
          className={`${darkMode ? 'text-gray-300' : 'text-gray-500'
            } flex items-center text-sm cursor-pointer`} //Added cursor pointer
        >
          <span>View All</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>


      <div
        onClick={() => router.push("/product/fooddash")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-orange-500 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">FoodDash</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Food Delivery & Restaurant App
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/taskflow")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-indigo-500 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">TaskFlow</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Task Management Application
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/anzatexintl")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-rose-500 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">Anzatex Intl</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              E-commerce Platform
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/ghostdetector")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-purple-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l2.5 5.5L21 11l-5.5 2.5L13 19l-2.5-5.5L5 11l5.5-2.5z"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">Ghost Detector</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Entertainment Application
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/soravpn")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-blue-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">Sora VPN</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Productivity / Privacy Application
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/seelvpn")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-cyan-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">Seel Vpn</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Productivity / Privacy Application
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/yallavpn")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-amber-500 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">Yalla VPN</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Productivity / Privacy Application
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/tytanvpn")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-slate-700 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 0121 9z"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">Tytan VPN</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Productivity / Privacy Application
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/totemvpn")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-teal-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">Totem VPN</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Productivity / Privacy Application
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/gotovpn")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-sky-500 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7-7 7M5 12h16"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">Goto VPN</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Productivity / Privacy Application
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/safenetvpn")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-emerald-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">SafeNet VPN</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Productivity / Privacy Application
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/kryptonyme")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-violet-700 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">Kryptonyme VPN</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Productivity / Privacy Application
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/easyguard")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-green-500 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">EasyGuard VPN</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Productivity / Privacy Application
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/freeroam")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-orange-500 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">Freeroam VPN</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Productivity / Privacy Application
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/kestrelvpn")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 transition-shadow cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-blue-700 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 001.09-9.88A5.5 5.5 0 0010.5 3.5A5.5 5.5 0 005 9.5A4 4 0 003 15z"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">Kestrel VPN </div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Application Productivity / Privacy
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/rockyvpn")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 transition-shadow cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-zinc-700 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">Rocky VPN</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Application Productivity / Privacy
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/gshieldvpn")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 transition-shadow cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-red-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">Gshield VPN</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Application Productivity / Privacy
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/pranksounds")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full transition-colors duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-pink-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414M11 5L6 9H2v6h4l5 4V5z"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">Prank Sounds</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              App development and design
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/pixelcount")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full transition-colors duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-indigo-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">Pixel Count</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              App Design, and development
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={() => router.push("/product/octavpn")}
        className={`${darkMode ? 'bg-zinc-800' : 'bg-white'
          } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full duration-200 cursor-pointer`}
      >
        <div className="flex items-center">
          <div className="bg-purple-500 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm sm:text-lg">Octa VPN</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs sm:text-sm`}>
              Entertainment Application
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
