import { useForm } from "react-hook-form";
import ErrorMessage from "../Components/ErrorMessage";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isvalid },
  } = useForm();
  //   setForm() : 폼을 관리하는 기능을 가져오는 코드
  // ex)입력값 연결, 제출처리, 에러관리

  // register(): 입력창을 React Hook Form에 등록 (어떤 이름으로 관리할지 지정)
  // handleSubmit()은 폼이 제출될 때 실행되는 함수

  console.log({ isvalid });

  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
    // 유저가 인풋에 입력한 내용을 객체로 반환
  };

  return (
    <div
      className="
  flex
  justify-center
  items-center
  h-screen
  bg-gray-200
  "
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
        w-
         p-12
       bg-white
        rounded-2xl
         shadow
         space-y-1
      "
      >
        <h1 className=" text-2xl font-black">SIGN UP</h1>
        <div className="w-full flex  items-center gap-3">
          <h3>아이디</h3>
          <input
            {...register("username", {
              required: "아이디는 필수입니다",
              minLength: {
                value: 8,
                message: "아이디는 8자 이상 작성해주세요.",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                message: "영문과 숫자를 포함해야합니다",
              },
            })}
            type="text"
            placeholder="ID"
            className=" p-2  border border-slate-300 rounded-md mt-2 "
          />
          <ErrorMessage message={errors?.username?.message} />
        </div>

        <div className="w-full flex justify-center items-center gap-3">
          <h3>비밀번호</h3>
          <input
            {...register("password", {
              required: "비밀번호는 필수입니다",
            })}
            type="Password"
            placeholder="Password"
            className=" p-2  border border-slate-300 rounded-md mt-2 "
          />
          <ErrorMessage message={errors?.password?.message} />
        </div>
        <button
          className={`
            w-full
             p-2
              bg-blue-500
               text-white
                font-bold 
                rounded-md 
                cursor-pointer 
                ${isvalid ? "bg-blue-500" : "bg-blue-300"}
                transition
                 hover:bg-blue-700
                 `}
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
