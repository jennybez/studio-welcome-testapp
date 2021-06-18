import React, { useState } from "react";

import * as Survey from "survey-react";
import * as SurveyPDF from "survey-pdf";

import "survey-react/modern.css";
import "./index.css";
import Modal from "./Modal";



function SurveyPdfComponent() {
    const [modal, setModal] = useState({
        modal: false
    })

    Survey.StylesManager.applyTheme("modern");

    const json = {


        "locale": "ru",
        "pages": [
            {
                "name": "page1",
                "elements": [
                    {
                        "type": "expression",
                        "name": "question8",
                        "title": {
                            "ru": "Блок 1: Знакомство "
                        },
                        "titleLocation": "top",
                        "description": {
                            "ru": "В этом блоке важно пройти все задания"
                        },
                        "hideNumber": true
                    },
                    {
                        "type": "comment",
                        "name": "question1",
                        "title": {
                            "ru": "ФИО (обоих супругов)"
                        },
                        "isRequired": true
                    },
                    {
                        "type": "comment",
                        "name": "question2",
                        "title": {
                            "ru": "Контактные данные (обоих супругов): телефон, WhatsApp, e-mail"
                        },
                        "isRequired": true
                    },
                    {
                        "type": "comment",
                        "name": "question3",
                        "title": {
                            "ru": "Адрес объекта"
                        },
                        "isRequired": true
                    },
                    {
                        "type": "comment",
                        "name": "question4",
                        "title": {
                            "ru": "Количество членов семьи, дети (пол и возраст)"
                        },
                        "isRequired": true
                    },
                    {
                        "type": "comment",
                        "name": "question5",
                        "title": {
                            "ru": "Животные"
                        },
                        "isRequired": true
                    },
                    {
                        "type": "comment",
                        "name": "question6",
                        "title": {
                            "ru": "Кто принимает решение в утверждении будущего интерьера?"
                        },
                        "isRequired": true
                    },
                    {
                        "type": "rating",
                        "name": "question7",
                        "title": {
                            "ru": "Предполагаемый бюджет (руб.)"
                        },
                        "isRequired": true,
                        "hasComment": true,
                        "rateMin": 1500000,
                        "rateMax": 15000000,
                        "rateStep": 250000
                    }
                ],
                "title": "Студия дизайна Homm приветствует Вас!",
                "description": {
                    "ru": "Давайте узнаем друг друга получше. Так мы сможем понять ваши требования и предпочтения по будущему дизайну. Пожалуйста, пройдите все блоки заданий. Спасибо! "
                }
            },
            {
                "name": "page2",
                "elements": [
                    {
                        "type": "expression",
                        "name": "question9",
                        "title": {
                            "ru": "Блок 2: Определение типа личности и Вашего образа жизни"
                        },
                        "description": {
                            "ru": "Это необходимо для подбора соответствующего стиля мебели, яркости, разнообразия или монотонности будущего дизайна"
                        },
                        "hideNumber": true
                    },
                    {
                        "type": "comment",
                        "name": "question10",
                        "title": {
                            "ru": "Вы экстраверт или интроверт?"
                        }
                    },
                    {
                        "type": "radiogroup",
                        "name": "question11",
                        "title": {
                            "ru": "Какой тип темперамента характеризует вас наибольшим образом?"
                        },
                        "hasComment": true,
                        "commentText": {
                            "ru": "Можете добавить что-нибудь здесь:"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Холерик"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Сангвиник"
                                }
                            },
                            {
                                "value": "item3",
                                "text": {
                                    "ru": "Флегматик"
                                }
                            },
                            {
                                "value": "item4",
                                "text": {
                                    "ru": "Меланхолик"
                                }
                            }
                        ]
                    },
                    {
                        "type": "comment",
                        "name": "question12",
                        "title": {
                            "ru": "Какая у вас профессия /сфера деятельности?"
                        }
                    },
                    {
                        "type": "radiogroup",
                        "name": "question13",
                        "title": {
                            "ru": "Вы левша или правша?"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Левша"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Правша"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question14",
                        "title": {
                            "ru": "Часто ли приходят гости?"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Часто"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "По праздникам"
                                }
                            },
                            {
                                "value": "item3",
                                "text": {
                                    "ru": "Редко"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question15",
                        "title": {
                            "ru": "Вы сова или жаворонок?"
                        },
                        "hasComment": true,
                        "commentText": {
                            "ru": "Можете добавить что-нибудь здесь:"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Сова"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Жаворонок"
                                }
                            }
                        ]
                    },
                    {
                        "type": "imagepicker",
                        "name": "question16",
                        "title": {
                            "ru": "Что представляет из себя Ваш объект?"
                        },
                        "isRequired": true,
                        "choices": [
                            {
                                "value": "lion",
                                "text": {
                                    "ru": "Квартира"
                                },
                                "imageLink": "images/квартира.jpg"
                            },
                            {
                                "value": "giraffe",
                                "text": {
                                    "ru": "Таунхаус"
                                },
                                "imageLink": "images/таунхаус.jpg"
                            },
                            {
                                "value": "panda",
                                "text": {
                                    "ru": "Дом/коттедж"
                                },
                                "imageLink": "images/cottege2.jpg"
                            }
                        ],
                        "showLabel": true
                    }
                ]
            },
            {
                "name": "page3",
                "elements": [
                    {
                        "type": "expression",
                        "name": "question17",
                        "title": {
                            "ru": "Блок 3: Планировочные решения"
                        },
                        "description": {
                            "ru": "Уточним моменты по интерьеру"
                        },
                        "hideNumber": true
                    },
                    {
                        "type": "expression",
                        "name": "question22",
                        "title": {
                            "ru": "Прихожая:"
                        },
                        "hideNumber": true
                    },
                    {
                        "type": "radiogroup",
                        "name": "question18",
                        "title": {
                            "ru": "Хранение одежды"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Открытое"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Закрытое"
                                }
                            },
                            {
                                "value": "item3",
                                "text": {
                                    "ru": "Комбинированное"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question19",
                        "title": {
                            "ru": "Тип напольного покрытия"
                        },
                        "hasComment": true,
                        "commentText": {
                            "ru": "Другое (укажите):"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Керамогранит"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question20",
                        "title": {
                            "ru": "Ключница"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question21",
                        "title": {
                            "ru": "Домофон"
                        },
                        "hasComment": true,
                        "commentText": {
                            "ru": "Другое (укажите):"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Обычный"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Видео"
                                }
                            },
                            {
                                "value": "item3",
                                "text": {
                                    "ru": "Через приложение"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question23",
                        "title": {
                            "ru": "Консоль для хранения мелочи"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question24",
                        "title": {
                            "ru": "Мягкая зона"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "name": "page4",
                "elements": [
                    {
                        "type": "expression",
                        "name": "question25",
                        "title": {
                            "ru": "Кухня:"
                        },
                        "hideNumber": true
                    },
                    {
                        "type": "radiogroup",
                        "name": "question26",
                        "title": {
                            "ru": "Кухонная зона"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Отдельная"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Студия"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question27",
                        "title": {
                            "ru": "Холодильник"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Встроенный"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Отдельно-стоящий"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question28",
                        "title": {
                            "ru": "Дополнительная морозильная камера"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question29",
                        "title": {
                            "ru": "Вытяжка"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Встроенная"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Отдельностоящая"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question30",
                        "title": {
                            "ru": "Варочная плита"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Электрическая"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Газ"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question31",
                        "title": {
                            "ru": "Духовой шкаф"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question32",
                        "title": {
                            "ru": "Посудомоечная машина"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question33",
                        "title": {
                            "ru": "Микроволновая печь"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question34",
                        "title": {
                            "ru": "Кофе машина"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "checkbox",
                        "name": "question35",
                        "title": {
                            "ru": "Другая техника"
                        },
                        "hasComment": true,
                        "commentText": {
                            "ru": "Можете добавить что-нибудь здесь:"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Электрический чайник"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Тостер"
                                }
                            },
                            {
                                "value": "item3",
                                "text": {
                                    "ru": "Мультиварка"
                                }
                            },
                            {
                                "value": "item4",
                                "text": {
                                    "ru": "Пароварка"
                                }
                            },
                            {
                                "value": "item5",
                                "text": {
                                    "ru": "Блендер"
                                }
                            },
                            {
                                "value": "item6",
                                "text": {
                                    "ru": "Соковыжималка"
                                }
                            },
                            {
                                "value": "item7",
                                "text": {
                                    "ru": "Хлебопечка"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question36",
                        "title": {
                            "ru": "Остров"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            },
                            {
                                "value": "item3",
                                "text": {
                                    "ru": "Рассмотреть"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question37",
                        "title": {
                            "ru": "Барная стойка"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            },
                            {
                                "value": "item3",
                                "text": {
                                    "ru": "Рассмотреть"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question38",
                        "title": {
                            "ru": "Обеденный стол "
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Расскладной"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Не раскладной"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "name": "page5",
                "elements": [
                    {
                        "type": "expression",
                        "name": "question39",
                        "title": {
                            "ru": "Гостиная:"
                        },
                        "hideNumber": true
                    },
                    {
                        "type": "radiogroup",
                        "name": "question40",
                        "title": {
                            "ru": "Диван"
                        },
                        "hasComment": true,
                        "commentText": {
                            "ru": "Другое (опишите)"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Прямой"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Угловой"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question41",
                        "title": {
                            "ru": "Кресла"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question42",
                        "title": {
                            "ru": "Журнальный стол"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question43",
                        "title": {
                            "ru": "Стеллажи для хранения"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Открытые"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Закрытые"
                                }
                            },
                            {
                                "value": "item3",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question44",
                        "title": {
                            "ru": "Телевизор"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question45",
                        "title": {
                            "ru": "Проектор"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question46",
                        "title": {
                            "ru": "Камин"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question47",
                        "title": {
                            "ru": "Лаундж зона"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "name": "page6",
                "elements": [
                    {
                        "type": "expression",
                        "name": "question48",
                        "title": {
                            "ru": "Спальня супругов:"
                        },
                        "hideNumber": true
                    },
                    {
                        "type": "radiogroup",
                        "name": "question49",
                        "title": {
                            "ru": "Кровать (размер в см.)"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "140"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "160"
                                }
                            },
                            {
                                "value": "item3",
                                "text": {
                                    "ru": "180"
                                }
                            },
                            {
                                "value": "item4",
                                "text": {
                                    "ru": "200"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question50",
                        "title": {
                            "ru": "Прикроватные тумбы"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Подвесные"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Напольные"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question51",
                        "title": {
                            "ru": "Телевизор"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question52",
                        "title": {
                            "ru": "Туалетный столик"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть "
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question53",
                        "title": {
                            "ru": "Комод"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть "
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question54",
                        "title": {
                            "ru": "Ковер"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть "
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question55",
                        "title": {
                            "ru": "Гардероб при спальне"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть "
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question56",
                        "title": {
                            "ru": "Ванная комната при спальне"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть "
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "name": "page7",
                "elements": [
                    {
                        "type": "expression",
                        "name": "question57",
                        "title": {
                            "ru": "Детская спальня:"
                        },
                        "hideNumber": true
                    },
                    {
                        "type": "radiogroup",
                        "name": "question58",
                        "title": {
                            "ru": "Пол ребенка"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Мальчик"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Девочка"
                                }
                            }
                        ]
                    },
                    {
                        "type": "text",
                        "name": "question59",
                        "title": {
                            "ru": "Имя"
                        }
                    },
                    {
                        "type": "text",
                        "name": "question60",
                        "title": {
                            "ru": "Возраст ребенка"
                        }
                    },
                    {
                        "type": "radiogroup",
                        "name": "question61",
                        "title": {
                            "ru": "Письменный стол"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question62",
                        "title": {
                            "ru": "Кровать (размер в см.)"
                        },
                        "hasComment": true,
                        "commentText": {
                            "ru": "Можете добавить что-нибудь здесь:"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "90"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "120"
                                }
                            },
                            {
                                "value": "item3",
                                "text": {
                                    "ru": "140"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question63",
                        "title": {
                            "ru": "Телевизор"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question64",
                        "title": {
                            "ru": "Компьютер"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "ПК"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Ноутбук"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question65",
                        "title": {
                            "ru": "Хранение игрушек"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question66",
                        "title": {
                            "ru": "Комод"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question67",
                        "title": {
                            "ru": "Диван"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question68",
                        "title": {
                            "ru": "Кресло"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question69",
                        "title": {
                            "ru": "Шкаф"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question70",
                        "title": {
                            "ru": "Гардероб при спальне"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "comment",
                        "name": "question71",
                        "title": {
                            "ru": "Увлечения"
                        }
                    }
                ]
            },
            {
                "name": "page8",
                "elements": [
                    {
                        "type": "expression",
                        "name": "question72",
                        "title": {
                            "ru": "Ванная комната:"
                        },
                        "hideNumber": true
                    },
                    {
                        "type": "radiogroup",
                        "name": "question73",
                        "title": {
                            "ru": "Унитаз"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Подвесной"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Отдельно стоящий"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question74",
                        "title": {
                            "ru": "Ванная"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Встроенная"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Отдельно стоящая"
                                }
                            },
                            {
                                "value": "item3",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question75",
                        "title": {
                            "ru": "Душевая"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question76",
                        "title": {
                            "ru": "Умывальник"
                        },
                        "hasComment": true,
                        "commentText": {
                            "ru": "Другое (опишите):"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Встроенный"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Раковина-чаша"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question77",
                        "title": {
                            "ru": "Полотенцесушитель "
                        },
                        "hasComment": true,
                        "commentText": {
                            "ru": "Другое (опишите):"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Электрический"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Водяной"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question78",
                        "title": {
                            "ru": "Шкаф для хранения"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "name": "page9",
                "elements": [
                    {
                        "type": "expression",
                        "name": "question79",
                        "title": {
                            "ru": "Гардеробная:"
                        },
                        "hideNumber": true
                    },
                    {
                        "type": "radiogroup",
                        "name": "question80",
                        "title": {
                            "ru": "Материал"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Модульного типа (металл)"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Корпусного типа (ЛДСП)"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question81",
                        "title": {
                            "ru": "Подсветка "
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "panel",
                        "name": "panel1",
                        "elements": [
                            {
                                "type": "checkbox",
                                "name": "question83",
                                "title": {
                                    "ru": "Итого помещений"
                                },
                                "description": {
                                    "ru": "Укажите точно какие помещения будут у объекта. При необходимости добавьте помещение или комментарий в поле ниже "
                                },
                                "hideNumber": true,
                                "hasComment": true,
                                "commentText": {
                                    "ru": "Опишите"
                                },
                                "choices": [
                                    {
                                        "value": "item1",
                                        "text": {
                                            "ru": "Кухня"
                                        }
                                    },
                                    {
                                        "value": "item2",
                                        "text": {
                                            "ru": "Спальня родителей"
                                        }
                                    },
                                    {
                                        "value": "item3",
                                        "text": {
                                            "ru": "Спальня ребенка"
                                        }
                                    },
                                    {
                                        "value": "item4",
                                        "text": {
                                            "ru": "Ванная комната"
                                        }
                                    },
                                    {
                                        "value": "item5",
                                        "text": {
                                            "ru": "Спа-зона"
                                        }
                                    }
                                ]
                            },
                            {
                                "type": "paneldynamic",
                                "name": "question82",
                                "title": {
                                    "ru": "Добавление помещения"
                                },
                                "hideNumber": true,
                                "templateElements": [
                                    {
                                        "type": "text",
                                        "name": "question84",
                                        "title": {
                                            "ru": "Другое помещение:"
                                        }
                                    }
                                ],
                                "panelAddText": {
                                    "ru": "Добавить помещение"
                                },
                                "panelRemoveText": {
                                    "ru": "Удалить помещение из списка"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "name": "page10",
                "elements": [
                    {
                        "type": "expression",
                        "name": "question85",
                        "title": {
                            "ru": "Блок 4: Интерьерные решения"
                        },
                        "hideNumber": true
                    },
                    {
                        "type": "radiogroup",
                        "name": "question86",
                        "title": {
                            "ru": "Желаемое основное покрытие"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Ламинат"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Паркетная (инженерная) доска"
                                }
                            },
                            {
                                "value": "item3",
                                "text": {
                                    "ru": "Керамогранит"
                                }
                            },
                            {
                                "value": "item4",
                                "text": {
                                    "ru": "Кварцивиниловая плитка"
                                }
                            },
                            {
                                "value": "item5",
                                "text": {
                                    "ru": "Пробковое покрыттие"
                                }
                            },
                            {
                                "value": "item6",
                                "text": {
                                    "ru": "Массивная доска"
                                }
                            }
                        ]
                    },
                    {
                        "type": "imagepicker",
                        "name": "question87",
                        "title": {
                            "ru": "Цветовая гамма основного покрытия"
                        },
                        "choices": [
                            {
                                "value": "lion",
                                "text": {
                                    "ru": "Светлый"
                                },
                                "imageLink": "images/sветлый пол.jpg"
                            },
                            {
                                "value": "giraffe",
                                "text": {
                                    "ru": "Натуральный"
                                },
                                "imageLink": "images/натуральный пол.jpg"
                            },
                            {
                                "value": "panda",
                                "text": {
                                    "ru": "Серый"
                                },
                                "imageLink": "images/sерый пол.jpg"
                            },
                            {
                                "value": "camel",
                                "text": {
                                    "ru": "Темный"
                                },
                                "imageLink": "images/темный пол.jpg"
                            },
                            {
                                "value": "Вариант1",
                                "text": {
                                    "ru": "Цветной"
                                },
                                "imageLink": "images/цветной пол.jpg"
                            },
                            {
                                "value": "Вариант2",
                                "text": {
                                    "ru": "Светлый мрамор"
                                },
                                "imageLink": "images/sветлый мрамор.jpg"
                            },
                            {
                                "value": "Вариант3",
                                "text": {
                                    "ru": "Темный мрамор"
                                },
                                "imageLink": "images/темный мраморный пол.jpg"
                            },
                            {
                                "value": "Вариант4",
                                "text": {
                                    "ru": "Под камень"
                                },
                                "imageLink": "images/розовый мрамор.jpg"
                            },
                            {
                                "value": "Вариант5",
                                "text": {
                                    "ru": "Чёрный"
                                },
                                "imageLink": "images/черный пол.jpg"
                            },
                            {
                                "value": "Вариант6",
                                "text": {
                                    "ru": "Серый2"
                                },
                                "imageLink": "images/sерая плитка.jpg"
                            }
                        ],
                        "showLabel": true
                    },
                    {
                        "type": "imagepicker",
                        "name": "question88",
                        "title": {
                            "ru": "Плинтуса"
                        },
                        "choices": [
                            {
                                "value": "lion",
                                "text": {
                                    "ru": "Полеуретановый под покраску"
                                },
                                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
                            },
                            {
                                "value": "giraffe",
                                "text": {
                                    "ru": "В цвет ламината"
                                },
                                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
                            },
                            {
                                "value": "panda",
                                "text": {
                                    "ru": "Металл"
                                },
                                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
                            },
                            {
                                "value": "camel",
                                "text": {
                                    "ru": "Скрытый"
                                },
                                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
                            }
                        ],
                        "showLabel": true
                    },
                    {
                        "type": "imagepicker",
                        "name": "question89",
                        "title": {
                            "ru": "Двери"
                        },
                        "choices": [
                            {
                                "value": "lion",
                                "text": {
                                    "ru": "Скрытая"
                                },
                                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
                            },
                            {
                                "value": "giraffe",
                                "text": {
                                    "ru": "Классика"
                                },
                                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
                            },
                            {
                                "value": "panda",
                                "text": {
                                    "ru": "Лофт"
                                },
                                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
                            },
                            {
                                "value": "camel",
                                "text": {
                                    "ru": "Современный"
                                },
                                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
                            }
                        ],
                        "showLabel": true
                    },
                    {
                        "type": "imagepicker",
                        "name": "question90",
                        "title": {
                            "ru": "Какие элементы интерьера Вам нравятся?"
                        },
                        "choices": [
                            {
                                "value": "lion",
                                "text": {
                                    "ru": "Рейки"
                                },
                                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
                            },
                            {
                                "value": "giraffe",
                                "text": {
                                    "ru": "Кирпич"
                                },
                                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
                            },
                            {
                                "value": "panda",
                                "text": {
                                    "ru": "Молдинги"
                                },
                                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
                            },
                            {
                                "value": "camel",
                                "text": {
                                    "ru": "Большие зеркала"
                                },
                                "imageLink": "images/зеркало от пола до потолка.png"
                            }
                        ],
                        "showLabel": true
                    }
                ]
            },
            {
                "name": "page11",
                "elements": [
                    {
                        "type": "expression",
                        "name": "question91",
                        "title": {
                            "ru": "Блок 5: Инженерные решения"
                        },
                        "hideNumber": true
                    },
                    {
                        "type": "comment",
                        "name": "question92",
                        "title": {
                            "ru": "В каких комнатах нужны кондиционеры?"
                        }
                    },
                    {
                        "type": "radiogroup",
                        "name": "question93",
                        "title": {
                            "ru": "Приточно-вытяжная система вентиляции"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question94",
                        "title": {
                            "ru": "Защита от протечек воды"
                        },
                        "description": {
                            "ru": "Автоматически перекрывает подачу воды при утечке"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question95",
                        "title": {
                            "ru": "Фильтрация воды для ванной"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question96",
                        "title": {
                            "ru": "Водонагреватель"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "comment",
                        "name": "question97",
                        "title": {
                            "ru": "В каких помещениях нужны теплые полы?"
                        }
                    },
                    {
                        "type": "radiogroup",
                        "name": "question98",
                        "title": {
                            "ru": "Домофон"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Обычный"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Видео"
                                }
                            },
                            {
                                "value": "item3",
                                "text": {
                                    "ru": "Через приложение"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question100",
                        "title": {
                            "ru": "Видеонаблюдение"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    },
                    {
                        "type": "radiogroup",
                        "name": "question99",
                        "title": {
                            "ru": "Шумоизоляция помещений"
                        },
                        "choices": [
                            {
                                "value": "item1",
                                "text": {
                                    "ru": "Есть"
                                }
                            },
                            {
                                "value": "item2",
                                "text": {
                                    "ru": "Нет"
                                }
                            }
                        ]
                    }
                ]
            }
        ],
        "startSurveyText": {
            "ru": "Начать тест"
        },
        "pagePrevText": {
            "ru": "Назад"
        },
        "pageNextText": {
            "ru": "Далее"
        },
        "completeText": {
            "ru": "Завершить тест"
        },
        "previewText": {
            "ru": "Просмотреть "
        },
        "editText": {
            "ru": "Редактировать"
        }


    };


    const survey = new Survey.Model(json);

    function saveSurveyToPdf(filename, surveyModel, pdfWidth, pdfHeight) {
        var options = {
            fontSize: 14,
            margins: {
                left: 10,
                right: 10,
                top: 10,
                bot: 10
            },
            format: [pdfWidth, pdfHeight]
        };
        var surveyPDF = new SurveyPDF.SurveyPDF(json, options);
        surveyPDF.data = surveyModel.data;
        surveyPDF.save(filename);
    }
    document.getElementById("saveToPDFbtn").onclick = function () {
        var pdfWidth = survey.pdfWidth || 210;
        var pdfHeight = survey.pdfHeight || 297;
        saveSurveyToPdf("Result.pdf", survey, pdfWidth, pdfHeight);
        setModal({ ...modal, modal: true })
    };

    return (
        <>
            <Survey.Survey
                model={survey}
            />

            <Modal
                title={'Подтвердите отправку'}
                isOpened={modal.modal}
                onModalClose={() => setModal({ ...modal, modal: false })}
            >
                <p>Если вы уверены, что хотите отправить форму, загрузите файл "Result.pdf", которвый был скачен моментом ранее.</p>
                <form method="post" action="/send.php" enctype="multipart/form-data">
                    <div class="form-group">
                        <input type="file" id="" name="upload"></input>
                    </div>
                    <button type="submit" id="sendform" class="btn btn-primary">Отправить форму</button>
                </form>

            </Modal>

        </>
    );

}

export default SurveyPdfComponent;