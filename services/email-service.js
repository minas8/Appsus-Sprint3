import { utilService } from './util-service.js'
import { storageService } from './storage-service.js'

const STORAGE_KEY = 'stored-emails-db'
const G_USER = 'Mina Shtraicher'

var gInitialEmails = [
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Bob Marely',
        to: G_USER,
        subject: 'Check out my new song',
        body: 'May JAH Be with you Mina,Morbi leo urna molestie at. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Id nibh tortor id aliquet lectus proin. Quam pellentesque nec nam aliquam sem et. Sit amet cursus sit amet. Purus non enim praesent elementum facilisis leo vel fringilla. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.',
        isRead: false,
        date: 1587911856459
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Coding academy',
        to: G_USER,
        subject: 'Hey Guys, we want to share with you this info',
        body: 'Bonjour Mina, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        isRead: true,
        date: 1576911144174
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Ido Oren',
        to: G_USER,
        subject: 'where are you girl...',
        body: ' Ola Mina,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia error aspernatur quis dignissimos maxime placeat ex inventore quos quia repellendus? Possimus explicabo velit ducimus officiis autem id atque quam adipisciLorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia error aspernatur quis dignissimos maxime placeat ex inventore quos quia repellendus? Possimus explicabo velit ducimus officiis autem id atque quam adipisci!',

        isRead: true,
        date: 1499921144171
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Mark Tzuknberg',
        to: G_USER,
        subject: 'Job oprotunity',
        body: 'Hi Mina, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia error aspernatur quis dignissimos maxime placeat ex inventore quos quia repellendus? Possimus explicabo velit ducimus officiis autem id atque quam adipisciLorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia error aspernatur quis dignissimos maxime placeat ex inventore quos quia repellendus? Possimus explicabo velit ducimus officiis autem id atque quam adipisci!',
        isRead: false,
        date: 2919671164771
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'TaTami',
        to: G_USER,
        subject: 'Join our fight club',
        body: ' KONISHUA MINA !! Id nibh tortor id aliquet lectus proin. Morbi leo urna molestie at. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Id nibh tortor id aliquet lectus proin. Quam pellentesque nec nam aliquam sem et. Sit amet cursus sit amet. Purus non enim praesent elementum facilisis leo vel fringilla. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.',
        isRead: true,
        date: 1486619856459
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Harry Pothead',
        to: G_USER,
        subject: 'long time no speak',
        body: 'NIHOW MINA ! feugiat vivamus at augue eget arcu dictum varius. Id nibh tortor id aliquet lectus proin. Morbi leo urna molestie at. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Id nibh tortor id aliquet lectus proin. Quam pellentesque nec nam aliquam sem et. Sit amet cursus sit amet. Purus non enim praesent elementum facilisis leo vel fringilla. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.',
        isRead: false,
        date: 1582119856459
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Tuburg Beer Ind',
        to: G_USER,
        subject: 'Supply for life',
        body: 'Hey there Mina,  Morbi leo urna molestie at. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Id nibh tortor id aliquet lectus proin. Quam pellentesque nec nam aliquam sem et. Sit amet cursus sit amet. Purus non enim praesent elementum facilisis leo vel fringilla. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.',
        isRead: false,
        date: 1572119856459
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Aliexpress',
        to: G_USER,
        subject: 'about your order 1512243434',
        body: 'Hello Mina, feugiat vivamus at augue eget arcu dictum varius. Id nibh tortor id aliquet lectus proin. Morbi leo urna molestie at. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Id nibh tortor id aliquet lectus proin.feugiat vivamus at augue eget arcu dictum varius. Id nibh tortor id aliquet lectus proin. Morbi leo urna molestie at. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Id nibh tortor id aliquet lectus proin. Quam pellentesque nec nam aliquam sem et. Sit amet cursus sit amet. Purus non enim praesent elementum facilisis leo vel fringilla. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Quam pellentesque nec nam aliquam sem et. Sit amet cursus sit amet. Purus non enim praesent elementum facilisis leo vel fringilla. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.',
        isRead: false,
        date: 1581112856359
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Yaron Bitton',
        to: G_USER,
        subject: 'Freezing your jeans - article',
        body: 'Hello Mina, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        isRead: true,
        date: 1589112856359
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Nevo.K',
        to: G_USER,
        subject: 'חמודי, סגלגלי, מרגשי,מחבקי',
        body: 'of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their.',
        isRead: false,
        date: 1588022122810
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Aws ',
        to: G_USER,
        subject: 'regarding your vc',
        body: 'Aloha to you Mina, of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as theirof using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as theirof using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their',
        isRead: true,
        date: 1584872112810
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'facebook.con',
        to: G_USER,
        subject: 'Receipt for Your Payment to Spotify Finance Limited',
        body: 'Aloha to you Mina, of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as theirof using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as theirof using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their',
        isRead: false,
        date: 1583874112210
    }
];

let gEmails = _InitEmails();

function _InitEmails() {

    const storedEmails = storageService.load(STORAGE_KEY);

    if (!storedEmails) {
        storageService.store(STORAGE_KEY, gInitialEmails)
        return gInitialEmails;
    };
    return storedEmails;
}


function query(filter, sort) {

    let emails = gEmails;

    if (filter.txt) {
        const filteredByTxt = emails.filter(email => email.subject.toLowerCase().includes(filter.txt.toLowerCase())
            || email.from.toLowerCase().includes(filter.txt.toLowerCase()) || email.body.toLowerCase().includes(filter.txt.toLowerCase())
        );
        emails = filteredByTxt;
    };
    if (filter.status) {
        const isRead = (filter.status === 'read') ? true : false;
        const filteredByStatus = emails.filter(email => email.isRead === isRead)
        emails = filteredByStatus;
    };

    emails = _sortEmails(emails, sort);

    return Promise.resolve(emails);
};

function _sortEmails(emails, sort) {
    if (sort.sortBy === 'date') {
        emails.sort((email1, email2) => {
            if (email1.date > email2.date) return 1;
            else if (email1.date < email2.date) return -1;
            else return 0;
        });
        if (sort.order) emails.reverse();
        return emails;
    } else {
        emails.sort((email1, email2) => {
            if (email1[sort.sortBy].toLowerCase() > email2[sort.sortBy].toLowerCase()) return 1;
            else if (email1[sort.sortBy].toLowerCase() < email2[sort.sortBy].toLowerCase()) return -1;
            else return 0;
        });
        if (!sort.order) emails.reverse();
        return emails;
    };
};

function getById(emailId) {
    const foundemail = gEmails.find(email => email.id === emailId);
    return Promise.resolve(foundemail);
};

function _getEmailIndex(emailId) {
    const emailIdx = gEmails.findIndex(email => email.id === emailId);
    return emailIdx;
};

function sendEmail(to, subject, body) {
    if (Math.random() > 0.95) return Promise.reject('Failed to send');
    let newemail = {
        id: utilService.makeId(4),
        location: 'sent',
        from: G_USER,
        to,
        subject,
        body,
        isRead: false,
        date: Date.now()
    };
    gEmails.unshift(newemail);
    storageService.store(STORAGE_KEY, gEmails);
    return Promise.resolve(newemail);
};

function openEmail(emailId) {
    const emailIdx = _getEmailIndex(emailId);
    gEmails[emailIdx].isRead = true;
    storageService.store(STORAGE_KEY, gEmails);
    return Promise.resolve();
};

function deleteMail(mailId) {
    const mailIndex = _getEmailIndex(mailId);
    gEmails.splice(mailIndex, 1);
    storageService.store(STORAGE_KEY, gEmails);
    return Promise.resolve();
};

function toggleEmailStatus(emailId) {
    const emailIdx = _getEmailIndex(emailId);
    const prevStatus = gEmails[emailIdx].isRead;
    gEmails[emailIdx].isRead = !prevStatus;
    storageService.store(STORAGE_KEY, gEmails);
    return Promise.resolve();
};

function getUnreadCount() {

    let unreadCount = 0;

    gEmails.forEach(email => {
        if (!email.isRead) unreadCount++;
    })
    return Promise.resolve(unreadCount);
};


export const emailService = {
    query,
    getById,
    sendEmail,
    deleteMail,
    toggleEmailStatus,
    getUnreadCount,
    openEmail
};