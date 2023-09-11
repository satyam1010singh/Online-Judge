import express from 'express';
import getproblemlist from '../controller/problem_list.js';

const router = express.Router();

router.route('/problemlist').get(getproblemlist);
//router.route('/testing/').get(testingmessage);
export default router;