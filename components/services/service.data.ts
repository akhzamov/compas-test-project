import img1 from '~/assets/img/service-1.svg'
import img2 from '~/assets/img/service-2.svg'
import img3 from '~/assets/img/service-3.svg'
import img4 from '~/assets/img/service-4.svg'
import img5 from '~/assets/img/service-5.svg'
import img6 from '~/assets/img/service-6.svg'

interface IService {
    id: number
    img: string
    title: string
    text: string
}

export const serviceData: IService[] = [
    {
        id: 1,
        img: img1,
        title: 'Неограниченный автопарк',
        text: 'Можно добавить неограниченное кол-во машин и водителей'
    },
    {
        id: 2,
        img: img2,
        title: 'Сокращение затрат до 50%',
        text: 'Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке'
    },
    {
        id: 3,
        img: img3,
        title: 'Безопасность',
        text: 'Данные передаются в зашифрованном виде, они доступны только получателю'
    },
    {
        id: 4,
        img: img4,
        title: 'Уведомление о погашении',
        text: 'Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП'
    },
    {
        id: 5,
        img: img5,
        title: 'Квитанция об оплате',
        text: 'После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.'
    },
    {
        id: 6,
        img: img6,
        title: 'Все история сохраняется по каждой машине',
        text: 'Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам'
    }
]