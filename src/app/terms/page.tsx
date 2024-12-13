'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/language-context'

export default function TermsOfService() {
  const { language, setLanguage, translations } = useLanguage()

  const termsOfService = {
    GB: {
      title: "Terms of Service",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: "By accessing or using the Whomever platform, you agree to be bound by these Terms of Service and all applicable laws and regulations."
        },
        {
          title: "2. Description of Service",
          content: "Whomever provides a platform for various online services and digital solutions. The specific features and functionalities may be updated or modified over time."
        },
        {
          title: "3. User Responsibilities",
          content: "• You are responsible for maintaining the security of your account.\n• You agree not to use the service for any illegal purposes.\n• You must provide accurate information when required.\n• You are responsible for all activities that occur under your account."
        },
        {
          title: "4. Intellectual Property",
          content: "All content, features, and functionality of the Whomever platform are owned by Whomever and are protected by international copyright, trademark, and other intellectual property laws."
        },
        {
          title: "5. Limitation of Liability",
          content: "Neither party shall be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service."
        },
        {
          title: "6. Modifications to Service",
          content: "We reserve the right to modify or discontinue the service at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service."
        },
        {
          title: "7. Contact Information",
          content: "For any questions regarding these Terms of Service, please contact us at:"
        }
      ]
    },
    RU: {
      title: "Условия использования",
      sections: [
        {
          title: "1. Принятие условий",
          content: "Получая доступ к платформе Whomever или используя ее, вы соглашаетесь соблюдать настоящие Условия использования и все применимые законы и правила."
        },
        {
          title: "2. Описание услуги",
          content: "Whomever предоставляет платформу для различных онлайн-услуг и цифровых решений. Конкретные функции и возможности могут обновляться или изменяться со временем."
        },
        {
          title: "3. Обязанности пользователя",
          content: "• Вы несете ответственность за поддержание безопасности своего аккаунта.\n• Вы соглашаетесь не использовать сервис в незаконных целях.\n• При необходимости вы должны предоставить точную информацию.\n• Вы несете ответственность за все действия, которые происходят под вашей учетной записью."
        },
        {
          title: "4. Интеллектуальная собственность",
          content: "Весь контент, функции и возможности платформы Whomever принадлежат Whomever и защищены международными законами об авторском праве, товарных знаках и другими законами об интеллектуальной собственности."
        },
        {
          title: "5. Ограничение ответственности",
          content: "Ни одна из сторон не несет ответственности за какие-либо косвенные, случайные, особые, последующие или штрафные убытки, возникшие в результате вашего использования или невозможности использования сервиса."
        },
        {
          title: "6. Изменения в обслуживании",
          content: "Мы оставляем за собой право изменять или прекращать обслуживание в любое время без уведомления. Мы не несем ответственности перед вами или любой третьей стороной за любое изменение, приостановку или прекращение обслуживания."
        },
        {
          title: "7. Контактная информация",
          content: "По любым вопросам относительно настоящих Условий использования обращайтесь к нам по адресу:"
        }
      ]
    },
    UZ: {
      title: "Xizmat ko'rsatish shartlari",
      sections: [
        {
          title: "1. Shartlarni qabul qilish",
          content: "Whomever platformasiga kirib yoki undan foydalanib, siz ushbu Xizmat ko'rsatish shartlari va barcha tegishli qonun va qoidalarga rioya qilishga rozilik bildirasiz."
        },
        {
          title: "2. Xizmat tavsifi",
          content: "Whomever turli onlayn xizmatlar va raqamli yechimlar uchun platforma taqdim etadi. Aniq xususiyatlar va funksionallik vaqt o'tishi bilan yangilanishi yoki o'zgartirilishi mumkin."
        },
        {
          title: "3. Foydalanuvchi majburiyatlari",
          content: "• Siz o'z hisobingiz xavfsizligini ta'minlash uchun javobgarsiz.\n• Siz xizmatdan noqonuniy maqsadlarda foydalanmaslikka rozilik bildirasiz.\n• Kerak bo'lganda aniq ma'lumot berishingiz kerak.\n• Siz o'z hisobingiz ostida sodir bo'ladigan barcha harakatlar uchun javobgarsiz."
        },
        {
          title: "4. Intellektual mulk",
          content: "Whomever platformasining barcha tarkibi, xususiyatlari va funksionalligi Whomever'ga tegishli va xalqaro mualliflik huquqi, savdo belgisi va boshqa intellektual mulk qonunlari bilan himoyalangan."
        },
        {
          title: "5. Javobgarlikni cheklash",
          content: "Hech bir tomon xizmatdan foydalanishingiz yoki foydalana olmasligingiz natijasida yuzaga kelgan har qanday bilvosita, tasodifiy, maxsus, keyingi yoki jazo xususiyatiga ega zararlar uchun javobgar bo'lmaydi."
        },
        {
          title: "6. Xizmatga o'zgartirishlar kiritish",
          content: "Biz xizmatni istalgan vaqtda ogohlantirmasdan o'zgartirish yoki to'xtatish huquqini saqlab qolamiz. Biz xizmatning har qanday o'zgartirilishi, to'xtatilishi yoki tugatilishi uchun sizga yoki uchinchi tomonga javobgar bo'lmaymiz."
        },
        {
          title: "7. Aloqa ma'lumotlari",
          content: "Ushbu Xizmat ko'rsatish shartlari bo'yicha har qanday savollar uchun biz bilan quyidagi manzil orqali bog'laning:"
        }
      ]
    },
    UA: {
      title: "Умови надання послуг",
      sections: [
        {
          title: "1. Прийняття умов",
          content: "Отримуючи доступ до платформи Whomever або використовуючи її, ви погоджуєтесь дотримуватися цих Умов надання послуг та всіх застосовних законів і правил."
        },
        {
          title: "2. Опис послуги",
          content: "Whomever надає платформу для різноманітних онлайн-послуг та цифрових рішень. Конкретні функції та можливості можуть оновлюватися або змінюватися з часом."
        },
        {
          title: "3. Обов'язки користувача",
          content: "• Ви несете відповідальність за підтримку безпеки свого облікового запису.\n• Ви погоджуєтесь не використовувати сервіс для незаконних цілей.\n• При необхідності ви повинні надати точну інформацію.\n• Ви несете відповідальність за всі дії, які відбуваються під вашим обліковим записом."
        },
        {
          title: "4. Інтелектуальна власність",
          content: "Весь вміст, функції та можливості платформи Whomever належать Whomever і захищені міжнародними законами про авторське право, товарні знаки та іншими законами про інтелектуальну власність."
        },
        {
          title: "5. Обмеження відповідальності",
          content: "Жодна зі сторін не несе відповідальності за будь-які непрямі, випадкові, особливі, наслідкові або штрафні збитки, що виникли в результаті вашого використання або неможливості використання сервісу."
        },
        {
          title: "6. Зміни в обслуговуванні",
          content: "Ми залишаємо за собою право змінювати або припиняти обслуговування в будь-який час без попередження. Ми не несемо відповідальності перед вами або будь-якою третьою стороною за будь-яку зміну, призупинення або припинення обслуговування."
        },
        {
          title: "7. Контактна інформація",
          content: "З будь-яких питань щодо цих Умов надання послуг звертайтеся до нас за адресою:"
        }
      ]
    },
    ES: {
      title: "Términos de Servicio",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content: "Al acceder o utilizar la plataforma Whomever, usted acepta estar sujeto a estos Términos de Servicio y a todas las leyes y regulaciones aplicables."
        },
        {
          title: "2. Descripción del Servicio",
          content: "Whomever proporciona una plataforma para varios servicios en línea y soluciones digitales. Las características y funcionalidades específicas pueden actualizarse o modificarse con el tiempo."
        },
        {
          title: "3. Responsabilidades del Usuario",
          content: "• Usted es responsable de mantener la seguridad de su cuenta.\n• Acepta no utilizar el servicio para fines ilegales.\n• Debe proporcionar información precisa cuando se requiera.\n• Es responsable de todas las actividades que ocurran bajo su cuenta."
        },
        {
          title: "4. Propiedad Intelectual",
          content: "Todo el contenido, características y funcionalidad de la plataforma Whomever son propiedad de Whomever y están protegidos por las leyes internacionales de derechos de autor, marcas registradas y otras leyes de propiedad intelectual."
        },
        {
          title: "5. Limitación de Responsabilidad",
          content: "Ninguna de las partes será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos resultantes de su uso o incapacidad para usar el servicio."
        },
        {
          title: "6. Modificaciones al Servicio",
          content: "Nos reservamos el derecho de modificar o descontinuar el servicio en cualquier momento sin previo aviso. No seremos responsables ante usted o cualquier tercero por cualquier modificación, suspensión o discontinuación del servicio."
        },
        {
          title: "7. Información de Contacto",
          content: "Para cualquier pregunta sobre estos Términos de Servicio, contáctenos en:"
        }
      ]
    },
    KR: {
      title: "서비스 약관",
      sections: [
        {
          title: "1. 약관 동의",
          content: "Whomever 플랫폼에 접속하거나 사용함으로써, 귀하는 이 서비스 약관 및 모든 관련 법률과 규정을 준수하는 데 동의합니다."
        },
        {
          title: "2. 서비스 설명",
          content: "Whomever는 다양한 온라인 서비스 및 디지털 솔루션을 위한 플랫폼을 제공합니다. 특정 기능과 기능성은 시간이 지남에 따라 업데이트되거나 수정될 수 있습니다."
        },
        {
          title: "3. 사용자 책임",
          content: "• 귀하는 계정의 보안을 유지할 책임이 있습니다.\n• 귀하는 서비스를 불법적인 목적으로 사용하지 않을 것에 동의합니다.\n• 필요한 경우 정확한 정보를 제공해야 합니다.\n• 귀하는 귀하의 계정에서 발생하는 모든 활동에 대해 책임이 있습니다."
        },
        {
          title: "4. 지적 재산권",
          content: "Whomever 플랫폼의 모든 콘텐츠, 기능 및 기능성은 Whomever의 소유이며 국제 저작권, 상표 및 기타 지적 재산권법에 의해 보호됩니다."
        },
        {
          title: "5. 책임의 제한",
          content: "어느 당사자도 서비스 사용 또는 사용 불능으로 인한 간접적, 우발적, 특별, 결과적 또는 징벌적 손해에 대해 책임을 지지 않습니다."
        },
        {
          title: "6. 서비스 수정",
          content: "우리는 언제든지 사전 통지 없이 서비스를 수정하거나 중단할 권리를 보유합니다. 우리는 서비스의 수정, 일시 중지 또는 중단에 대해 귀하나 제3자에게 책임을 지지 않습니다."
        },
        {
          title: "7. 연락처 정보",
          content: "이 서비스 약관에 대한 질문이 있으시면 다음 주소로 문의해 주세요:"
        }
      ]
    }
  }

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">{termsOfService[language].title}</h1>
      
      <div className="space-y-6 text-zinc-300">
        {termsOfService[language].sections.map((section, index) => (
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

