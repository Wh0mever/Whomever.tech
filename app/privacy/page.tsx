'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/language-context'

export default function PrivacyPolicy() {
  const { language, setLanguage, translations } = useLanguage()

  const privacyPolicy = {
    GB: {
      title: "Privacy Policy",
      sections: [
        {
          title: "1. The information we collect",
          content: "We collect information that you provide to us directly, including when creating an account or communicating with us. This may include:\n\n• Contact information (for example, email address)\n• Communication settings"
        },
        {
          title: "2. How we use your information",
          content: "We use the information we collect to:\n\n• Provide, maintain and improve our services\n• Send you technical notifications and support messages"
        },
        {
          title: "3. Information exchange",
          content: "We do not sell or rent your personal information to third parties. We may share your information in the following situations:\n\n• With your consent\n• To fulfill legal obligations\n• To protect our rights and prevent fraud"
        },
        {
          title: "4. Security",
          content: "We take appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure or destruction."
        },
        {
          title: "5. Updates to this Policy",
          content: "We may update this privacy policy from time to time. We will notify you of any changes by posting a new privacy policy on this page."
        },
        {
          title: "6. Contact us",
          content: "If you have any questions about this privacy policy, please contact us at:"
        }
      ]
    },
    RU: {
      title: "Политика конфиденциальности",
      sections: [
        {
          title: "1. Информация, которую мы собираем",
          content: "Мы собираем информацию, которую вы предоставляете нам напрямую, в том числе при создании учетной записи или общении с нами. Это может включать:\n\n• Контактную информацию (например, адрес электронной почты)\n• Настройки связи"
        },
        {
          title: "2. Как мы используем вашу информацию",
          content: "Мы используем собранную информацию для:\n\n• Предоставления, поддержки и улучшения наших услуг\n• Отправки вам технических уведомлений и сообщений поддержки"
        },
        {
          title: "3. Обмен информацией",
          content: "Мы не продаем и не сдаем в аренду вашу личную информацию третьим лицам. Мы можем делиться вашей информацией в следующих ситуациях:\n\n• С вашего согласия\n• Для выполнения юридических обязательств\n• Для защиты наших прав и предотвращения мошенничества"
        },
        {
          title: "4. Безопасность",
          content: "Мы принимаем соответствующие технические и организационные меры для защиты вашей личной информации от несанкционированного доступа, изменения, раскрытия или уничтожения."
        },
        {
          title: "5. Обновления этой политики",
          content: "Мы можем время от времени обновлять эту политику конфиденциальности. Мы уведомим вас о любых изменениях, разместив новую политику конфиденциальности на этой странице."
        },
        {
          title: "6. Свяжитесь с нами",
          content: "Если у вас есть какие-либо вопросы об этой политике конфиденциальности, пожалуйста, свяжитесь с нами по адресу:"
        }
      ]
    },
    UZ: {
      title: "Maxfiylik siyosati",
      sections: [
        {
          title: "1. Biz to'playdigan ma'lumotlar",
          content: "Biz sizdan to'g'ridan-to'g'ri oladigan ma'lumotlarni, jumladan, hisob yaratish yoki biz bilan aloqa qilish paytida to'playmiz. Bu quyidagilarni o'z ichiga olishi mumkin:\n\n• Aloqa ma'lumotlari (masalan, elektron pochta manzili)\n• Aloqa sozlamalari"
        },
        {
          title: "2. Ma'lumotlaringizdan qanday foydalanamiz",
          content: "Biz to'plagan ma'lumotlardan quyidagi maqsadlarda foydalanamiz:\n\n• Xizmatlarimizni taqdim etish, qo'llab-quvvatlash va takomillashtirish\n• Sizga texnik xabarnomalar va qo'llab-quvvatlash xabarlarini yuborish"
        },
        {
          title: "3. Ma'lumot almashinuvi",
          content: "Biz shaxsiy ma'lumotlaringizni uchinchi shaxslarga sotmaymiz yoki ijaraga bermaymiz. Biz sizning ma'lumotlaringizni quyidagi holatlarda almashishimiz mumkin:\n\n• Sizning roziligingiz bilan\n• Qonuniy majburiyatlarni bajarish uchun\n• Huquqlarimizni himoya qilish va firibgarlikning oldini olish uchun"
        },
        {
          title: "4. Xavfsizlik",
          content: "Biz shaxsiy ma'lumotlaringizni ruxsatsiz kirish, o'zgartirish, oshkor qilish yoki yo'q qilishdan himoya qilish uchun tegishli texnik va tashkiliy choralarni ko'ramiz."
        },
        {
          title: "5. Ushbu siyosatga yangilanishlar",
          content: "Biz vaqti-vaqti bilan ushbu maxfiylik siyosatini yangilab turishimiz mumkin. Biz har qanday o'zgarishlar haqida ushbu sahifada yangi maxfiylik siyosatini joylashtirish orqali xabar beramiz."
        },
        {
          title: "6. Biz bilan bog'laning",
          content: "Agar sizda ushbu maxfiylik siyosati haqida savollaringiz bo'lsa, iltimos, biz bilan quyidagi manzil orqali bog'laning:"
        }
      ]
    },
    UA: {
      title: "Політика конфіденційності",
      sections: [
        {
          title: "1. Інформація, яку ми збираємо",
          content: "Ми збираємо інформацію, яку ви надаєте нам безпосередньо, включаючи при створенні облікового запису або спілкуванні з нами. Це може включати:\n\n• Контактну інформацію (наприклад, адресу електронної пошти)\n• Налаштування зв'язку"
        },
        {
          title: "2. Як ми використовуємо вашу інформацію",
          content: "Ми використовуємо зібрану інформацію для:\n\n• Надання, підтримки та покращення наших послуг\n• Надсилання вам технічних повідомлень та повідомлень підтримки"
        },
        {
          title: "3. Обмін інформацією",
          content: "Ми не продаємо і не здаємо в оренду вашу особисту інформацію третім особам. Ми можемо ділитися вашою інформацією в наступних ситуаціях:\n\n• З вашої згоди\n• Для виконання юридичних зобов'язань\n• Для захисту наших прав та запобігання шахрайству"
        },
        {
          title: "4. Безпека",
          content: "Ми вживаємо відповідних технічних та організаційних заходів для захисту вашої особистої інформації від несанкціонованого доступу, зміни, розкриття або знищення."
        },
        {
          title: "5. Оновлення цієї політики",
          content: "Ми можемо час від часу оновлювати цю політику конфіденційності. Ми повідомимо вас про будь-які зміни, розмістивши нову політику конфіденційності на цій сторінці."
        },
        {
          title: "6. Зв'яжіться з нами",
          content: "Якщо у вас є будь-які питання щодо цієї політики конфіденційності, будь ласка, зв'яжіться з нами за адресою:"
        }
      ]
    },
    ES: {
      title: "Política de Privacidad",
      sections: [
        {
          title: "1. La información que recopilamos",
          content: "Recopilamos información que nos proporciona directamente, incluso al crear una cuenta o comunicarse con nosotros. Esto puede incluir:\n\n• Información de contacto (por ejemplo, dirección de correo electrónico)\n• Configuraciones de comunicación"
        },
        {
          title: "2. Cómo usamos su información",
          content: "Usamos la información que recopilamos para:\n\n• Proporcionar, mantener y mejorar nuestros servicios\n• Enviarle notificaciones técnicas y mensajes de soporte"
        },
        {
          title: "3. Intercambio de información",
          content: "No vendemos ni alquilamos su información personal a terceros. Podemos compartir su información en las siguientes situaciones:\n\n• Con su consentimiento\n• Para cumplir con obligaciones legales\n• Para proteger nuestros derechos y prevenir el fraude"
        },
        {
          title: "4. Seguridad",
          content: "Tomamos medidas técnicas y organizativas apropiadas para proteger su información personal contra el acceso no autorizado, la alteración, la divulgación o la destrucción."
        },
        {
          title: "5. Actualizaciones de esta Política",
          content: "Podemos actualizar esta política de privacidad de vez en cuando. Le notificaremos de cualquier cambio publicando una nueva política de privacidad en esta página."
        },
        {
          title: "6. Contáctenos",
          content: "Si tiene alguna pregunta sobre esta política de privacidad, contáctenos en:"
        }
      ]
    },
    KR: {
      title: "개인정보 처리방침",
      sections: [
        {
          title: "1. 우리가 수집하는 정보",
          content: "우리는 계정을 만들거나 우리와 소통할 때 귀하가 직접 제공하는 정보를 수집합니다. 이는 다음을 포함할 수 있습니다:\n\n• 연락처 정보 (예: 이메일 주소)\n• 통신 설정"
        },
        {
          title: "2. 귀하의 정보를 사용하는 방법",
          content: "우리는 수집한 정보를 다음과 같이 사용합니다:\n\n• 서비스 제공, 유지 및 개선\n• 기술적 알림 및 지원 메시지 전송"
        },
        {
          title: "3. 정보 교환",
          content: "우리는 귀하의 개인 정보를 제3자에게 판매하거나 대여하지 않습니다. 다음과 같은 상황에서 귀하의 정보를 공유할 수 있습니다:\n\n• 귀하의 동의가 있는 경우\n• 법적 의무를 이행하기 위해\n• 우리의 권리를 보호하고 사기를 방지하기 위해"
        },
        {
          title: "4. 보안",
          content: "우리는 귀하의 개인 정보를 무단 접근, 변경, 공개 또는 파괴로부터 보호하기 위해 적절한 기술적 및 조직적 조치를 취합니다."
        },
        {
          title: "5. 본 정책의 업데이트",
          content: "우리는 때때로 이 개인정보 처리방침을 업데이트할 수 있습니다. 변경 사항이 있을 경우 이 페이지에 새로운 개인정보 처리방침을 게시하여 알려드립니다."
        },
        {
          title: "6. 문의하기",
          content: "이 개인정보 처리방침에 대해 질문이 있으시면 다음 주소로 문의해 주세요:"
        }
      ]
    }
  }

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">{privacyPolicy[language].title}</h1>
      
      <div className="space-y-6 text-zinc-300">
        {privacyPolicy[language].sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="whitespace-pre-wrap">{section.content}</p>
          </section>
        ))}
        <section>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Email: <a href="mailto:contact@whomever.tech" className="text-amber-500 hover:text-amber-400">contact@whomever.tech</a></li>
            <li>Telegram: <a href="https://t.me/ctrltg" className="text-amber-500 hover:text-amber-400">@ctrltg</a></li>
            <li>Discord: <span className="text-amber-500">whomever</span></li>
          </ul>
        </section>
      </div>
    </div>
  )
}

