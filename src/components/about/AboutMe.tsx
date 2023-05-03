import { motion as mo } from "framer-motion"

function AboutMe(lang: any, aboutTech: boolean) {
  return (
    <>
      <p>{lang}</p>
      {!aboutTech && lang === 'en' && (
        <mo.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          // exit={{ opacity: 0 }}
          className="w-[90%] h-[400px] mt-8"
        >
          Hi, my name is Valery Li and I'm a front-end engineer who has
          experience in building back-end infrastructure too. I also have
          wide experience (10+ years) in finance creating budgets and
          financial statements and understand all business processes in
          companies. I am passionate about learning new technologies and
          finding solutions in non-standard tasks. In my childhood I was
          crazy about chess, but now I prefer billiards more. <br />
          My latest achivements: ~ created full-stack app prototype for
          financial company ~ ran a half marathon in Almaty (april, 2023)
        </mo.section>
      )}
      {!aboutTech && lang === 'ru' && (
        <mo.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          // exit={{ opacity: 0 }}
          className="w-[90%] mt-8"
        >
          Привет, меня зовут Валерий и я - фронтенд разработчик (2+ года
          опыта), также имеющий опыт создания серверной части приложений
          (бэкенд). У меня богатый опыт (10+ лет) работы в финансовой сфере
          (бюджетирование, финансовое планирование и различные виды
          отчетностей) и глубокое понимание бизнес процессов компаний.
          Обожаю изучать новые технологии и находить решения нестандартных
          задач. С детства играю в шахматы, но сейчас больше предпочитаю
          бильярд. <br />
          Мои последние достижения: ~ разработал прототип full-stack
          приложения для финансовой компании ~ пробежал полумарафон в Алматы
          (апрель, 2023)
        </mo.section>
      )}
    </>
  )
}

export default AboutMe