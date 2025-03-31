import { Router } from 'express';

import * as AlunoController from '../controllers/AlunoController';
import * as DisciplinaController from '../controllers/DisciplinaController'
import * as AlunoDisciplinaController from '../controllers/AlunoDisciplinaController'

const router = Router();

router.get('/listarTodosAlunos', AlunoController.listarAlunos); 
router.post('/cadastrarAluno', AlunoController.cadastrarAluno);

router.get('/listarTodasDisciplinas', DisciplinaController.listarDisciplinas); 
router.post('/cadastrarDisciplina', DisciplinaController.cadastrarDisciplina);

router.post('/vincularAlunoADisciplina', AlunoDisciplinaController.vincularAlunoADisciplina); 
router.get('/listarDisciplinasDoAluno/:alunoId', AlunoDisciplinaController.listarDisciplinasDoAluno);

export default router;