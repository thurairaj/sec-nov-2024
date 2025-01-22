import Greetings from "@/component/Greetings";
import Counter from "@/component/Counter";

export default function Home() {
  return (
    <div>
      <h1>Project Intro</h1>
      <Greetings name="Thurai" age="30" place="Malaysia"></Greetings>
      <Greetings name="David" age="32" place="Canada"></Greetings>
        <Counter></Counter>
    </div>
  );
}
