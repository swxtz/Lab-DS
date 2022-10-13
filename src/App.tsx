import { Envelope, Lock } from "phosphor-react";
import { Heading } from "./components/Heading/Heading";
import { Logo } from "./components/Logo/Logo";
import { Text } from "./components/Text/Text";
import { TextInput } from "./components/TextInput/TextInput";
import {Checkbox} from "./components/Checkbox/Checkbox"
import "./styles/global.css";
import { Button } from "./components/Button/Button";

export function App() {
  return (
    <div className="w-screen h-screen flex-col bg-gray-900 flex items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo  />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text className="text-gray-400 mt-1" size="lg">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex gap-4 flex-col items-stretch w-full max-w-[400px] mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input placeholder="Digite seu e-mail" type="email" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input placeholder="********" type="password" />
          </TextInput.Root>
        </label>

        <label htmlFor="remeber" className="flex items-center gap-2">
          <Checkbox id="remeber" />
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
        <a href="#" className="text-gray-400 underline hover:text-gray-200 duration-200 ">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm"> 
        <a href="#" className="text-gray-400 underline hover:text-gray-200 duration-200 ">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  );
}
