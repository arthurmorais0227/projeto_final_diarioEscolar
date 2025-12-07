--
-- PostgreSQL database dump
--

\restrict M9yPmnPBSveNeuNQtRxCvaqhhzRqgk574IZjALxb6brNXbMwD2HIY6Wpnjv9RN0

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

-- Started on 2025-12-07 10:56:38

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4930 (class 1262 OID 24576)
-- Name: MySchoolDiary_db; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "MySchoolDiary_db" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';


ALTER DATABASE "MySchoolDiary_db" OWNER TO postgres;

\unrestrict M9yPmnPBSveNeuNQtRxCvaqhhzRqgk574IZjALxb6brNXbMwD2HIY6Wpnjv9RN0
\connect "MySchoolDiary_db"
\restrict M9yPmnPBSveNeuNQtRxCvaqhhzRqgk574IZjALxb6brNXbMwD2HIY6Wpnjv9RN0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4924 (class 0 OID 33220)
-- Dependencies: 223
-- Data for Name: Aluno; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Aluno" (id, nome, email, telefone, aluno_foto) FROM stdin;
1	Ana Clara Cremasco Luiz	ana.c.luiz@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/anac.png
2	Arthur Morais dos Santos	arthur.m.santos20@aluno.senai.br	(11) 90000-0001	/assets/img/alunos/arthur.png
3	Beatriz Miotto de Oliveira	beatriz.oliveira@aluno.senai.br	(11) 90000-0002	/assets/img/alunos/beatriz.png
4	Bianca Luisa Teodoro Silva	bianca.silva@aluno.senai.br	(11) 90000-0003	/assets/img/alunos/bianca.png
5	Cauã Tupinambá Guimarães de Oliveira Pinto	caua.t.pinto@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/tupi.png
6	Daniel Casalli	daniel.casalli@aluno.senai.br	(11) 90000-0004	/assets/img/alunos/daniel.png
7	Danilo do Valle Marchiori Jorge	danilo.v.jorge@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/danilo.png
8	Emílio Henrique dos Santos Favoretto	emilio.favoretto@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/emilio.png
9	Fabio Henrique Rabello Trevizolli	fabio.trevizolli@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/fabio.png
10	Fernando Santos Evêncio da Silva	fernando.s.silva22@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/fernando.png
11	Gabriela Emi Yamamoto	gabriela.yamamoto@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/gabi.png
12	Gustavo Teixeira Lisboa	gustavo.t.lisboa@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/lisboa.png
13	Gustavo Victor Ferreira	gustavo.ferreira@aluno.senai.br	(11) 90000-0005	/assets/img/alunos/gustavo.png
14	João Pedro Piva Nogueira	joao.p.nogueira@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/piva.png
15	João Pedro Rodrigues Stopiglia	joao.r.stopiglia@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/stopiglia.png
16	João Victor da Silva Gomes	joao.v.gomes50@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/joaovictor.png
17	Julia Erlo Figueiredo de Miranda	julia.e.miranda@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/julia.png
18	Lívia Oliveira Cruz	livia.cruz@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/livia.png
19	Luiz Felipe Allage	luiz.felipe14@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/luizfelipe.png
20	Manuela Maestro	manuela.maestro@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/semfoto.png
21	Maria Eduarda Braga Ferreira	maria.e.ferreira77@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/semfoto.png
22	Maria Eduarda de Andrade	maria.e.andrade17@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/andrade.png
23	Murilo Milan Brustólin	murilo.brustolin@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/murilo.png
24	Nicolly Rodrigues de Souza Santos	nicolly.r.santos10@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/nicolly.png
25	Pedro Henrique Urbano Escapalete	pedro.escapalete@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/urbano.png
26	Pedro Otávio de Andrade Braga	pedro.o.braga6@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/pedrootavio.png
27	Rafael Santos Mendes	rafael.s.mendes@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/rafael.png
28	Rebeca Gabrielly Moreira Alves	rebeca.g.alve@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/rebeca.png
29	Victor Ferreira de Oliveira	victor.f.oliveira14@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/victorferreira.png
30	Yasmin Crisostomo de Oliveira	yasmin.c.oliveira19@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/yasminc.png
31	Yasmin Isabele Porto	yasmin.i.porto@aluno.senai.br	(11) 90000-0006	/assets/img/alunos/yasminp.png
\.


--
-- TOC entry 4922 (class 0 OID 33210)
-- Dependencies: 221
-- Data for Name: Comentario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Comentario" (id, autor, comentario, data, id_postagem) FROM stdin;
1	Gustavo Lisboa	Ficou incrível! 📸	2025-12-07 13:51:08.322	1
2	João Stopiglia	Gostei demais! 📸	2025-12-07 13:51:08.322	1
3	Daniel Casalli	Achei massa 😂	2025-12-07 13:51:08.323	2
4	Gustavo Lisboa	Ficou incrível!	2025-12-07 13:51:08.323	2
5	Livia Oliveira Cruz	Altas memórias!	2025-12-07 13:51:08.325	3
6	Gustavo Victor Ferreira	Ficou incrível!	2025-12-07 13:51:08.325	3
7	Beatriz Miotto de Oliveira	Que demais!	2025-12-07 13:51:08.326	4
8	Gabriela Emi Yamamoto	Que demais!	2025-12-07 13:51:08.326	4
9	João Stopiglia	Brabo demais 💼	2025-12-07 13:51:08.328	5
10	Cauã Tupinambá	Brabo demais 💼	2025-12-07 13:51:08.328	5
11	Daniel Casalli	Muito bom!	2025-12-07 13:51:08.329	6
12	Sunshine Sun	Mandou bem demais!	2025-12-07 13:51:08.329	6
13	João Stopiglia	KKKKKK top	2025-12-07 13:51:08.331	7
14	Gustavo Victor Ferreira	Altas memórias!	2025-12-07 13:51:08.331	7
15	Maria Eduarda	Muito bom!	2025-12-07 13:51:08.332	8
16	Gustavo Victor Ferreira	Amei essa!	2025-12-07 13:51:08.332	8
17	Bianca Luisa Teodoro Silva	Sensacional!	2025-12-07 13:51:08.333	9
18	Gustavo Lisboa	KKKKKK top	2025-12-07 13:51:08.333	9
19	Yasmin Crisóstomo	Gostei demais!	2025-12-07 13:51:08.335	10
20	Cauã Tupinambá	Foto muito boa!	2025-12-07 13:51:08.335	10
21	Gustavo Victor Ferreira	Gostei demais!	2025-12-07 13:51:08.336	11
22	Gustavo Victor Ferreira	Ficou incrível!	2025-12-07 13:51:08.336	11
23	João Piva	Mandou bem demais! 📸	2025-12-07 13:51:08.338	12
24	Livia Oliveira Cruz	Altas memórias! 📸	2025-12-07 13:51:08.338	12
25	João Piva	Gostei demais!	2025-12-07 13:51:08.339	13
26	Bianca Luisa Teodoro Silva	Gostei demais!	2025-12-07 13:51:08.339	13
27	Arthur Morais	Que demais!	2025-12-07 13:51:08.34	14
28	Gustavo Lisboa	Altas memórias!	2025-12-07 13:51:08.34	14
29	Yasmin Crisóstomo	Foto muito boa!	2025-12-07 13:51:08.342	15
30	Cauã Tupinambá	Mandou bem demais!	2025-12-07 13:51:08.342	15
31	Bianca Luisa Teodoro Silva	Ficou incrível! 📸	2025-12-07 13:51:08.343	16
32	Gustavo Victor Ferreira	Que demais! 📸	2025-12-07 13:51:08.343	16
33	Cauã Tupinambá	Amei essa!	2025-12-07 13:51:08.344	17
34	Arthur Morais	Foto muito boa!	2025-12-07 13:51:08.344	17
35	Gustavo Victor Ferreira	Que demais!	2025-12-07 13:51:08.345	18
36	Sunshine Sun	Achei massa 😂	2025-12-07 13:51:08.345	18
37	Yasmin Crisóstomo	Sensacional!	2025-12-07 13:51:08.346	19
38	Sunshine Sun	Ficou incrível!	2025-12-07 13:51:08.346	19
39	Murilo Milan Brustolin	Ficou incrível!	2025-12-07 13:51:08.348	20
40	Gabriela Emi Yamamoto	Muito bom!	2025-12-07 13:51:08.348	20
41	Gustavo Victor Ferreira	Altas memórias!	2025-12-07 13:51:08.349	21
42	Rafael Santos Mendes	Achei massa 😂	2025-12-07 13:51:08.349	21
43	Gustavo Lisboa	Ficou incrível!	2025-12-07 13:51:08.35	22
44	Bianca Luisa Teodoro Silva	KKKKKK top	2025-12-07 13:51:08.35	22
45	Beatriz Miotto de Oliveira	Amei essa!	2025-12-07 13:51:08.351	23
46	Beatriz Miotto de Oliveira	Altas memórias!	2025-12-07 13:51:08.351	23
47	Beatriz Miotto de Oliveira	Foto muito boa!	2025-12-07 13:51:08.352	24
48	Arthur Morais	KKKKKK top	2025-12-07 13:51:08.352	24
49	Arthur Morais	Foto muito boa!	2025-12-07 13:51:08.353	25
50	Daniel Casalli	KKKKKK top	2025-12-07 13:51:08.353	25
51	Gabriela Emi Yamamoto	Sensacional!	2025-12-07 13:51:08.355	26
52	Livia Oliveira Cruz	Que demais!	2025-12-07 13:51:08.355	26
53	Bianca Luisa Teodoro Silva	Kkkkk adorei	2025-12-07 13:51:08.356	27
54	Gustavo Lisboa	Altas memórias!	2025-12-07 13:51:08.356	27
55	João Piva	Gostei demais!	2025-12-07 13:51:08.358	28
56	Murilo Milan Brustolin	Gostei demais!	2025-12-07 13:51:08.358	28
57	João Piva	Sensacional!	2025-12-07 13:51:08.359	29
58	Sunshine Sun	Foto muito boa!	2025-12-07 13:51:08.359	29
59	Pedro Otávio Braga	KKKKKK top	2025-12-07 13:51:08.36	30
60	Arthur Morais	Gostei demais!	2025-12-07 13:51:08.36	30
61	Murilo Milan Brustolin	Muito bom!	2025-12-07 13:51:08.361	31
62	Livia Oliveira Cruz	Que demais!	2025-12-07 13:51:08.361	31
63	Bianca Luisa Teodoro Silva	Foto muito boa!	2025-12-07 13:51:08.362	32
64	Maria Eduarda	KKKKKK top	2025-12-07 13:51:08.362	32
65	Sunshine Sun	Gostei demais!	2025-12-07 13:51:08.363	33
66	Gustavo Victor Ferreira	Muito bom!	2025-12-07 13:51:08.363	33
67	Gustavo Lisboa	Altas memórias!	2025-12-07 13:51:08.364	34
68	Beatriz Miotto de Oliveira	Mandou bem demais!	2025-12-07 13:51:08.364	34
69	Maria Eduarda	Que demais!	2025-12-07 13:51:08.365	35
70	Livia Oliveira Cruz	Kkkkk adorei	2025-12-07 13:51:08.365	35
71	João Stopiglia	Amei essa!	2025-12-07 13:51:08.366	36
72	Livia Oliveira Cruz	KKKKKK top	2025-12-07 13:51:08.366	36
73	Rafael Santos Mendes	Muito bom!	2025-12-07 13:51:08.367	37
74	Gustavo Victor Ferreira	Gostei demais!	2025-12-07 13:51:08.367	37
75	Gustavo Lisboa	Mandou bem demais!	2025-12-07 13:51:08.369	38
76	Gabriela Emi Yamamoto	Kkkkk adorei	2025-12-07 13:51:08.369	38
77	Victor Ferreira	Que demais!	2025-12-07 13:51:08.37	39
78	Pedro Otávio Braga	Sensacional!	2025-12-07 13:51:08.37	39
79	Sunshine Sun	Ficou incrível!	2025-12-07 13:51:08.371	40
80	Daniel Casalli	Amei essa!	2025-12-07 13:51:08.371	40
81	Sunshine Sun	Sensacional!	2025-12-07 13:51:08.373	41
82	Pedro Otávio Braga	Altas memórias!	2025-12-07 13:51:08.373	41
83	Beatriz Miotto de Oliveira	Achei massa 😂	2025-12-07 13:51:08.374	42
84	João Stopiglia	Achei massa 😂	2025-12-07 13:51:08.374	42
85	Yasmin Crisóstomo	Altas memórias!	2025-12-07 13:51:08.375	43
86	Arthur Morais	Altas memórias!	2025-12-07 13:51:08.375	43
87	Gabriela Emi Yamamoto	Foto muito boa!	2025-12-07 13:51:08.376	44
88	Gabriela Emi Yamamoto	Altas memórias!	2025-12-07 13:51:08.376	44
89	Gustavo Lisboa	Amei essa!	2025-12-07 13:51:08.377	45
90	Murilo Milan Brustolin	Que demais!	2025-12-07 13:51:08.377	45
91	Daniel Casalli	Brabo demais 💼	2025-12-07 13:51:08.378	46
92	Sunshine Sun	Brabo demais 💼	2025-12-07 13:51:08.378	46
93	Pedro Otávio Braga	Sensacional!	2025-12-07 13:51:08.379	47
94	Arthur Morais	KKKKKK top	2025-12-07 13:51:08.379	47
95	Arthur Morais	Amei essa!	2025-12-07 13:51:08.381	48
96	Livia Oliveira Cruz	Gostei demais!	2025-12-07 13:51:08.381	48
97	Pedro Otávio Braga	Que demais!	2025-12-07 13:51:08.382	49
98	Livia Oliveira Cruz	Kkkkk adorei	2025-12-07 13:51:08.382	49
99	Gustavo Lisboa	KKKKKK top	2025-12-07 13:51:08.383	50
100	Gustavo Victor Ferreira	Ficou incrível!	2025-12-07 13:51:08.383	50
101	João Piva	Gostei demais!	2025-12-07 13:51:08.384	51
102	Gustavo Lisboa	Amei essa!	2025-12-07 13:51:08.384	51
103	Arthur Morais	Amei essa!	2025-12-07 13:51:08.385	52
104	Gustavo Victor Ferreira	Kkkkk adorei	2025-12-07 13:51:08.385	52
105	João Piva	Altas memórias!	2025-12-07 13:51:08.387	53
106	Pedro Otávio Braga	Altas memórias!	2025-12-07 13:51:08.387	53
107	Rafael Santos Mendes	Achei massa 😂	2025-12-07 13:51:08.388	54
108	Daniel Casalli	Altas memórias!	2025-12-07 13:51:08.388	54
109	Gabriela Emi Yamamoto	Mandou bem demais!	2025-12-07 13:51:08.39	55
110	Sunshine Sun	Gostei demais!	2025-12-07 13:51:08.39	55
111	Victor Ferreira	Gostei demais! 📸	2025-12-07 13:51:08.391	56
112	Gustavo Victor Ferreira	Kkkkk adorei 📸	2025-12-07 13:51:08.391	56
113	Livia Oliveira Cruz	Muito bom!	2025-12-07 13:51:08.392	57
114	Daniel Casalli	Amei essa!	2025-12-07 13:51:08.392	57
115	João Stopiglia	Altas memórias!	2025-12-07 13:51:08.393	58
116	Gustavo Victor Ferreira	Altas memórias!	2025-12-07 13:51:08.393	58
117	Gabriela Emi Yamamoto	KKKKKK top	2025-12-07 13:51:08.394	59
118	Livia Oliveira Cruz	Kkkkk adorei	2025-12-07 13:51:08.394	59
119	Murilo Milan Brustolin	Mandou bem demais!	2025-12-07 13:51:08.395	60
120	Cauã Tupinambá	Ficou incrível!	2025-12-07 13:51:08.395	60
121	Bianca Luisa Teodoro Silva	Sensacional!	2025-12-07 13:51:08.396	61
122	Rafael Santos Mendes	Que demais!	2025-12-07 13:51:08.396	61
123	Gabriela Emi Yamamoto	Sensacional!	2025-12-07 13:51:08.397	62
124	Sunshine Sun	Foto muito boa!	2025-12-07 13:51:08.397	62
125	Pedro Otávio Braga	Altas memórias!	2025-12-07 13:51:08.398	63
126	Victor Ferreira	Altas memórias!	2025-12-07 13:51:08.398	63
127	Gustavo Victor Ferreira	Amei essa!	2025-12-07 13:51:08.399	64
128	Arthur Morais	Altas memórias!	2025-12-07 13:51:08.399	64
129	Maria Eduarda	Altas memórias!	2025-12-07 13:51:08.4	65
130	Sunshine Sun	Gostei demais!	2025-12-07 13:51:08.4	65
131	Gustavo Lisboa	Kkkkk adorei	2025-12-07 13:51:08.401	66
132	Gustavo Lisboa	KKKKKK top	2025-12-07 13:51:08.401	66
133	Sunshine Sun	Sensacional!	2025-12-07 13:51:08.402	67
134	Maria Eduarda	KKKKKK top	2025-12-07 13:51:08.402	67
135	Beatriz Miotto de Oliveira	Achei massa 😂	2025-12-07 13:51:08.404	68
136	Pedro Otávio Braga	Foto muito boa!	2025-12-07 13:51:08.404	68
137	Gustavo Victor Ferreira	Que demais!	2025-12-07 13:51:08.405	69
138	Cauã Tupinambá	Mandou bem demais!	2025-12-07 13:51:08.405	69
139	Gabriela Emi Yamamoto	Altas memórias! 📸	2025-12-07 13:51:08.407	70
140	Daniel Casalli	Ficou incrível! 📸	2025-12-07 13:51:08.407	70
141	Maria Eduarda	Ficou incrível!	2025-12-07 13:51:08.408	71
142	Beatriz Miotto de Oliveira	Mandou bem demais!	2025-12-07 13:51:08.408	71
143	Maria Eduarda	Muito bom!	2025-12-07 13:51:08.409	72
144	Arthur Morais	Ficou incrível!	2025-12-07 13:51:08.409	72
145	Gabriela Emi Yamamoto	Amei essa!	2025-12-07 13:51:08.41	73
146	Maria Eduarda	Achei massa 😂	2025-12-07 13:51:08.41	73
147	Livia Oliveira Cruz	Sensacional!	2025-12-07 13:51:08.412	74
148	Livia Oliveira Cruz	KKKKKK top	2025-12-07 13:51:08.412	74
149	Gustavo Victor Ferreira	Gostei demais!	2025-12-07 13:51:08.413	75
150	Cauã Tupinambá	Ficou incrível!	2025-12-07 13:51:08.413	75
151	Pedro Otávio Braga	Foto muito boa!	2025-12-07 13:51:08.414	76
152	João Piva	Sensacional!	2025-12-07 13:51:08.414	76
153	João Stopiglia	Amei essa!	2025-12-07 13:51:08.415	77
154	Murilo Milan Brustolin	Altas memórias!	2025-12-07 13:51:08.415	77
155	Murilo Milan Brustolin	Amei essa!	2025-12-07 13:51:08.416	78
156	Victor Ferreira	Mandou bem demais!	2025-12-07 13:51:08.416	78
157	Gustavo Lisboa	Foto muito boa!	2025-12-07 13:51:08.417	79
158	João Piva	Que demais!	2025-12-07 13:51:08.417	79
159	Gabriela Emi Yamamoto	Amizade é tudo!	2025-12-07 13:51:08.418	80
160	Bianca Luisa Teodoro Silva	Amizade é tudo!	2025-12-07 13:51:08.418	80
161	Sunshine Sun	Foto muito boa!	2025-12-07 13:51:08.419	81
162	Pedro Otávio Braga	Sensacional!	2025-12-07 13:51:08.419	81
163	Gabriela Emi Yamamoto	Sensacional!	2025-12-07 13:51:08.42	82
164	Yasmin Crisóstomo	Kkkkk adorei	2025-12-07 13:51:08.42	82
165	Maria Eduarda	Muito bom!	2025-12-07 13:51:08.422	83
166	Livia Oliveira Cruz	Altas memórias!	2025-12-07 13:51:08.422	83
167	Arthur Morais	Muito bom!	2025-12-07 13:51:08.423	84
168	Sunshine Sun	Mandou bem demais!	2025-12-07 13:51:08.423	84
169	Gustavo Lisboa	Foto muito boa!	2025-12-07 13:51:08.424	85
170	Rafael Santos Mendes	Altas memórias!	2025-12-07 13:51:08.424	85
171	Livia Oliveira Cruz	Mandou bem demais!	2025-12-07 13:51:08.425	86
172	Beatriz Miotto de Oliveira	Mandou bem demais!	2025-12-07 13:51:08.425	86
173	Livia Oliveira Cruz	KKKKKK top	2025-12-07 13:51:08.426	87
174	João Stopiglia	Altas memórias!	2025-12-07 13:51:08.426	87
175	João Piva	Kkkkk adorei	2025-12-07 13:51:08.427	88
176	Gabriela Emi Yamamoto	Achei massa 😂	2025-12-07 13:51:08.427	88
177	Livia Oliveira Cruz	Muito bom!	2025-12-07 13:51:08.428	89
178	João Piva	Achei massa 😂	2025-12-07 13:51:08.428	89
179	João Piva	Foto muito boa!	2025-12-07 13:51:08.429	90
180	Bianca Luisa Teodoro Silva	Foto muito boa!	2025-12-07 13:51:08.429	90
181	Beatriz Miotto de Oliveira	Ficou incrível! 📸	2025-12-07 13:51:08.43	91
182	Victor Ferreira	Muito bom! 📸	2025-12-07 13:51:08.43	91
183	Gustavo Lisboa	Kkkkk adorei	2025-12-07 13:51:08.431	92
184	Daniel Casalli	Mandou bem demais!	2025-12-07 13:51:08.431	92
185	Gustavo Victor Ferreira	Achei massa 😂	2025-12-07 13:51:08.432	93
186	Sunshine Sun	Foto muito boa!	2025-12-07 13:51:08.432	93
187	Yasmin Crisóstomo	Amei essa!	2025-12-07 13:51:08.434	94
188	Pedro Otávio Braga	Que demais!	2025-12-07 13:51:08.434	94
189	João Piva	Que demais!	2025-12-07 13:51:08.435	95
190	Arthur Morais	Sensacional!	2025-12-07 13:51:08.435	95
191	Cauã Tupinambá	Ficou incrível!	2025-12-07 13:51:08.436	96
192	Rafael Santos Mendes	Que demais!	2025-12-07 13:51:08.436	96
193	Rafael Santos Mendes	Sensacional!	2025-12-07 13:51:08.437	97
194	Gustavo Lisboa	Altas memórias!	2025-12-07 13:51:08.437	97
195	João Stopiglia	KKKKKK top	2025-12-07 13:51:08.439	98
196	Murilo Milan Brustolin	Sensacional!	2025-12-07 13:51:08.439	98
197	Gustavo Lisboa	Mandou bem demais!	2025-12-07 13:51:08.44	99
198	Daniel Casalli	Mandou bem demais!	2025-12-07 13:51:08.44	99
199	Livia Oliveira Cruz	Sensacional!	2025-12-07 13:51:08.441	100
200	Victor Ferreira	Altas memórias!	2025-12-07 13:51:08.441	100
201	Anônimo	a\\	2025-12-07 13:53:27.78	101
\.


--
-- TOC entry 4920 (class 0 OID 33200)
-- Dependencies: 219
-- Data for Name: Postagem; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Postagem" (id, autor, descricao, data, imagem) FROM stdin;
1	Arthur Morais	Fazendo pose para a foto do github.	2025-03-15 10:00:00	https://imgur.com/xmt2zAj.jpeg
2	Murilo Milan Brustolin	Eu, Arthur e Edu somos do Rock!.	2025-01-20 14:30:00	https://imgur.com/kvaAXUS.jpeg
3	Arthur Morais	Será que to com muita espinha??.	2025-04-05 08:00:00	https://imgur.com/HbusjjJ.jpeg
4	Arthur Morais	Fica frio aí mano.	2025-07-10 19:45:00	https://imgur.com/227tG0a.jpeg
5	Gabriela Emi Yamamoto	Eu, miotto e arthur fazendo trabalho aff.	2025-05-22 11:11:11	https://imgur.com/0OWfbEi.jpeg
6	Gustavo Victor Ferreira	Eu e o Arthur recriando o poster de Memories of Murder.	2025-11-01 22:00:00	https://imgur.com/JXnruxq.jpeg
7	Arthur Morais	Eu e gustavo c cara de trouxa	2025-02-14 09:15:00	https://imgur.com/lUPlO05.jpeg
8	Victor Ferreira	aiiiiaiiiiaiii cachorro html.	2025-10-30 16:00:00	https://imgur.com/FYTA9VD.jpeg
9	Gustavo Victor	A bang perfeitinha do gu.	2025-08-08 13:20:00	https://imgur.com/f5uo8ng.jpeg
10	Murilo Brustolin	calças novas	2025-12-25 00:00:00	https://imgur.com/Vuw97c9.jpeg
11	Victor Ferreira	Estudando programação no laboratório de informática.	2025-03-28 10:00:00	https://imgur.com/dg5mVzj.jpeg
12	Bianca Luisa Teodoro Silva	Tirando foto no banheiro rsrsrs	2025-01-01 14:30:00	https://imgur.com/BPaIs2A.jpeg
13	Bianca Luisa Teodoro Silva	Eu e meus pastéis	2025-04-12 08:00:00	https://imgur.com/3JO9noM.jpeg
14	Bianca Luisa Teodoro Silva	Participando da feira de ciências da escola com meus pasteis.	2025-07-25 19:45:00	https://imgur.com/oet5B39.jpeg
15	Livia Oliveira Cruz	eu e a bia fazendo paaaaz	2025-05-03 11:11:11	https://imgur.com/MEBtgcr.jpeg
16	Rebeca Gabrielly	Tirando foto no banheiro bem iconicas.	2025-11-15 22:00:00	https://imgur.com/9vRkrit.jpeg
17	bianca luisa	Eu e a tsumoto.	2025-02-09 09:15:00	https://imgur.com/bUXMq8E.jpeg
18	livia Oliveira	Sesi muuuuundo	2025-10-01 16:00:00	https://imgur.com/ybt13lX.jpeg
19	Daniel Casalli	eu de perto rs.	2025-08-18 13:20:00	https://imgur.com/eAkc4Xe.jpeg
20	Daniel Casalli	eu e a miotto na aulinha top do thiago.	2025-12-05 00:00:00	https://imgur.com/oR7ENyp.jpeg
21	daniel Casalli	you are my sunshine my only sunshine.	2025-03-03 10:00:00	https://imgur.com/IROAAxX.jpeg
22	Danilo do Valle Marchiori Jorge	eu e a porto no jóia.	2025-01-09 14:30:00	https://imgur.com/oBD3GHL.jpeg
23	Emilio Henrique	emilio.	2025-04-29 08:00:00	https://imgur.com/nJotLX3.jpeg
24	Livia Oliveira	Felipe dev atento.	2025-07-19 19:45:00	https://imgur.com/AIwnjZu.jpeg
25	Pedro Otávio de Andrade Braga	trabalhando fazendo pasteis igual um condenado	2025-05-14 11:11:11	https://imgur.com/JXnCMuD.jpeg
26	Beatriz Miotto de Oliveira	eu e os sitecrafters codando	2025-11-20 22:00:00	https://imgur.com/0OWfbEi.jpeg
27	Fernando Santos Evêncio da Silva	codando c meus dois amores rs	2025-02-23 09:15:00	https://imgur.com/Rd69wUT.jpeg
28	Gabriela Emi Yamamoto	comendo	2025-10-10 16:00:00	https://imgur.com/qIktUI2.jpeg
29	Gabriela Emi Yamamoto	instalação SO	2025-08-29 13:20:00	https://imgur.com/CJB9VoY.jpeg
30	Fábio Henrique Rabello Trevizolli	recriando o poster de Clube dos 5	2025-12-14 00:00:00	https://imgur.com/cbQ2iUW.jpeg
31	Gustavo Teixeira Lisboa	só codar codar codar e codar.	2025-03-07 10:00:00	https://imgur.com/KFZfr7S.jpeg
32	Arthur Morais	eu, gu e sunshine	2025-01-25 14:30:00	https://imgur.com/cRljj76.jpeg
33	Arthur Morais	eu e o gu fazendo palhaçada	2025-04-18 08:00:00	https://imgur.com/uxwYOo4.jpeg
34	Gustavo Victor	não aguento mais só codar html	2025-07-02 19:45:00	https://imgur.com/ljIAqhr.jpeg
35	Gustavo Victor	Meu talento é ser P.O	2025-05-09 11:11:11	https://imgur.com/MwsxVfl.jpeg
36	Gustavo Victor	Fica frio aí arthur	2025-11-29 22:00:00	https://imgur.com/24jKRBX.jpeg
37	Gustavo Victor	o mistério dos pastéis	2025-02-05 09:15:00	https://imgur.com/6ymct3E.jpeg
38	Gustavo Victor Ferreira	diálogo com o pedro 	2025-10-20 16:00:00	https://imgur.com/7dCvnBV.jpeg
39	Joao Stopiglia	henrico só com o pokémon	2025-08-01 13:20:00	https://imgur.com/Iz3Jr5G.jpeg
40	Arthur Morais	instalando manjaro no SENAI	2025-12-01 00:00:00	https://imgur.com/SuElxjI.jpeg
41	Maria Eduarda de Andrade	rock	2025-03-30 10:00:00	https://imgur.com/VzXFLmf.jpeg
42	Luiz Felipe	eu e o jão 	2025-01-11 14:30:00	https://imgur.com/2Y2hiA5.jpeg
43	João Stopiglia	Eu e a duuuuuda	2025-04-25 08:00:00	https://imgur.com/oFy2nVC.jpeg
44	Pedro Henrique Urbano Escapalete	garrafa, joao e eu	2025-07-07 19:45:00	https://imgur.com/lGuaCsA.jpeg
45	Beatriz Miotto de Oliveira	fazendo biquinho na biblio	2025-05-18 11:11:11	https://imgur.com/tmEEZ5R.jpeg
46	Gustavo teixeira Lisboa	Fazendo trabalho de pokemon	2025-11-05 22:00:00	https://imgur.com/CPClVY8.jpeg
47	Bianca Luisa Teodoro Silva	Estou andando	2025-02-19 09:15:00	https://imgur.com/xyTsQkq.jpeg
48	Beatriz Miotto de Oliveira	Com elas!!	2025-10-09 16:00:00	https://imgur.com/vi34gKW.jpeg
49	Livia Oliveira Cruz	Com a minha metadinha eu me sinto tão segurinha	2025-08-25 13:20:00	https://imgur.com/mN0kDq6.jpeg
50	Arthur Morais dos Santos	fazendo meu filme fav c o guuu	2025-12-29 00:00:00	https://imgur.com/JXnruxq.jpeg
51	Livia Oliveira Cruz	Eu e a assombração	2025-03-11 10:00:00	https://imgur.com/aJOEVjw.jpeg
52	Livia Oliveira Cruz	Mexendo no cardapio da minha pastelaria	2025-01-05 14:30:00	https://imgur.com/mVVK4fo.jpeg
53	Luiz Felipe	?	2025-04-01 08:00:00	https://imgur.com/V4mZvQI.jpeg
54	Livia Oliveira Cruz	Tatuagem inguaissss	2025-07-29 19:45:00	https://imgur.com/pW7K0UM.jpeg
55	Daniel Casalli	Olhar de fallen angel	2025-05-27 11:11:11	https://imgur.com/2f92e14.jpeg
56	Luiz Felipe	livia tirou foto nossa	2025-11-10 22:00:00	https://imgur.com/ZLuHMRp.jpeg
57	Luiz Felipe	vendo as notas eita	2025-02-01 09:15:00	https://imgur.com/ofdsedO.jpeg
58	Luiz Felipe	olho de peixe c o piva e a yasmin	2025-10-04 16:00:00	https://imgur.com/7o5DzwX.jpeg
59	Bianca Luisa Teodoro Silva	Fazendo pose com as girls no auditório	2025-08-11 13:20:00	https://imgur.com/O7L7va1.jpeg
60	Beatriz Miotto de Oliveira	fazendo beijo c a bibis	2025-12-08 00:00:00	https://imgur.com/lbkJpSt.jpeg
61	Beatriz Miotto	Formatando pc no laboratório	2025-03-20 10:00:00	https://imgur.com/1F0OkxK.jpeg
62	Rafael Santos Mendes	mesa dos goats.	2025-01-22 14:30:00	https://imgur.com/wmaJDkx.jpeg
63	Murilo Milan Brustolin	recriando o poster de Stranger Things com o edu	2025-04-09 08:00:00	https://imgur.com/jG2P7bh.jpeg
64	Joao Pedro Piva Nogueira	farmando aura	2025-07-15 19:45:00	https://imgur.com/2mZyDGP.jpeg
65	João Pedro Piva Nogueira	Fazendo massagem no fernando	2025-05-01 11:11:11	https://imgur.com/dvZuetd.jpeg
66	Livia oliveira Cruz	piva sendo piva.	2025-11-25 22:00:00	https://imgur.com/9IjIDNl.jpeg
67	Murilo Milan Brustolin	buuuuuu	2025-02-11 09:15:00	https://imgur.com/fG5P1wV.jpeg
68	Fabio Henrique Rabello Trevizolli	recriando o poster de ET	2025-10-24 16:00:00	https://imgur.com/SEEySTd.jpeg
69	Livia Oliveira Cruz	recriando cena do clube dos 5 com os dois patetas	2025-08-04 13:20:00	https://imgur.com/8tyOlpI.jpeg
70	João Victor Gomes de Souza	Foto com a tropa	2025-12-19 00:00:00	https://imgur.com/tmDfDQo.jpeg
71	Victor Ferreira de Oliveira	joia, login e muito codigo	2025-03-09 10:00:00	https://imgur.com/BsHgyST.jpeg
72	Gustavo Victor Ferreira	Cachorro aiiaiaiaiaiai	2025-01-29 14:30:00	https://imgur.com/FYTA9VD.jpeg
73	Emílio Henrique dos Santos Favoretto	sala 1tds1	2025-04-04 08:00:00	https://imgur.com/XpCHDCL.jpeg
74	Fabio Henrique Rabello Trevizolli	beijinho com o tupi	2025-07-22 19:45:00	https://imgur.com/OyjPFIm.jpeg
75	Pedro Henrique Urbano Escapalete	mesa dos goats by tupi	2025-05-17 11:11:11	https://imgur.com/DrMYmHv.jpeg
76	Murilo Milan Brustolin	preciso urgentemente de uma calça nova	2025-11-27 22:00:00	https://imgur.com/Vuw97c9.jpeg
77	Sunshine Sun	eu e meus bests.	2025-02-17 09:15:00	https://imgur.com/IROAAxX.jpeg
78	Yasmin Crisóstomo	eu e meu momor codando e o luiz de vela.	2025-10-06 16:00:00	https://imgur.com/Rd69wUT.jpeg
79	Daniel Casalli	Amo esse filme	2025-08-22 13:20:00	https://imgur.com/cbQ2iUW.jpeg
80	Gustavo Victor Ferreira	Cena top c meus amigos tops	2025-12-10 00:00:00	https://imgur.com/8tyOlpI.jpeg
81	Rafael Santos Mendes	amamos o gusteivo mané	2025-03-25 10:00:00	https://imgur.com/6DXPa6C.jpeg
82	Daniel Casalli	apresentação medo	2025-01-18 14:30:00	https://imgur.com/VzXFLmf.jpeg
83	Pedro Otávio de Andrade Braga	Comendo Halls	2025-04-06 08:00:00	https://imgur.com/6zlnN9k.jpeg
84	João Pedro Piva Nogueira	👍	2025-07-09 19:45:00	https://imgur.com/3ho8WPj.jpeg
85	João Pedro Piva Nogueira	loouuuuusa	2025-05-13 11:11:11	https://imgur.com/ceTCdYF.jpeg
86	João Stopiglia	Eu e o lzn	2025-11-03 22:00:00	https://imgur.com/2Y2hiA5.jpeg
87	Arthur Morais	Entrei no rasp	2025-02-07 09:15:00	https://imgur.com/fw2vc8W.jpeg
88	Danilo do Valle Marchiori Jorge	rebeca nanando	2025-10-14 16:00:00	https://imgur.com/bgthJq7.jpeg
89	Jão Stopiglia	eu e as duas	2025-08-06 13:20:00	https://imgur.com/x1Vd2xL.jpeg
90	Rebeca Gabrielly Moreira Alves	prof mamprim	2025-12-03 00:00:00	https://imgur.com/XC5sdnz.jpeg
91	Cauã Tupinambá	foto da sala	2025-03-17 10:00:00	https://imgur.com/LD7twnj.jpeg
92	Lívia Oliveira Cruz	Felipe Dev personagem	2025-01-07 14:30:00	https://imgur.com/XEyniLT.jpeg
93	Livia Oliveira Cruz	girls e a sunshine	2025-04-22 08:00:00	https://imgur.com/3Ikcky3.jpeg
94	João Stopiglia	eu e o thales	2025-07-27 19:45:00	https://imgur.com/f1a9oa5.jpeg
95	Arthur Morais	Gustavo codando	2025-05-25 11:11:11	https://imgur.com/jIyWUWs.jpeg
96	Cauã Tupinambá	eu e o pivo só nas risadas	2025-11-08 22:00:00	https://imgur.com/z9oe1zc.jpeg
97	Cauã Tupinambá	estou indignado	2025-02-27 09:15:00	https://imgur.com/Fd3nTBG.jpeg
98	Maria Eduarda Braga	Eu e o joãozinho	2025-10-18 16:00:00	https://imgur.com/lGuaCsA.jpeg
99	Cauã Tupinambá	olhar atento	2025-08-27 13:20:00	https://imgur.com/hkvhYSf.jpeg
100	Cauã Tupinambá	positivo e eu	2025-12-23 00:00:00	https://imgur.com/76NSeB6.jpeg
101	Arthur Morais	memroias	2025-12-07 13:53:19.434	data:image/png;base64,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
\.


--
-- TOC entry 4918 (class 0 OID 33188)
-- Dependencies: 217
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
64053b2d-7fe1-4bb2-a6b8-077a3b4974ed	2be4966958573f98cde7a269a04073a7965992c21eea4c817d5a0640b108ac88	2025-12-07 10:50:41.507372-03	20251207135041_init	\N	\N	2025-12-07 10:50:41.435539-03	1
\.


--
-- TOC entry 4936 (class 0 OID 0)
-- Dependencies: 222
-- Name: Aluno_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Aluno_id_seq"', 31, true);


--
-- TOC entry 4937 (class 0 OID 0)
-- Dependencies: 220
-- Name: Comentario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Comentario_id_seq"', 201, true);


--
-- TOC entry 4938 (class 0 OID 0)
-- Dependencies: 218
-- Name: Postagem_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Postagem_id_seq"', 101, true);


-- Completed on 2025-12-07 10:56:38

--
-- PostgreSQL database dump complete
--

\unrestrict M9yPmnPBSveNeuNQtRxCvaqhhzRqgk574IZjALxb6brNXbMwD2HIY6Wpnjv9RN0

