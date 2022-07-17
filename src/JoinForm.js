import React, { useState } from "react";
import Input from "./Input";
export default function JoinForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <Input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      ></Input>
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
      ></Input>
      <button type="submit">가입하기</button>
      <button type="button">초기화</button>
    </form>
  );
}
